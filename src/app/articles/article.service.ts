import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList, AngularFireAction } from '@angular/fire/database';
import { Observable, BehaviorSubject} from 'rxjs';
import { Article } from './article';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private dbPath = '/articles';

  articleRef: AngularFireList<Article> = null;
  dbRef = this.db.database.ref(this.dbPath);

  fooArray: any;
  items: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  group: BehaviorSubject<any>;
  article: Observable<any>;
  //article: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;


  constructor(public db: AngularFireDatabase) {
    this.articleRef = db.list(this.dbPath);
  }

  createArticle(article: Article): void {
    //this.dbRef.child('metrics').set(article);
    this.articleRef.push(article);
  }

  updateArticle(key: string, value: any): Promise<void> {
    return this.articleRef.update(key, value);
  }

  deleteArticle(key: string): Promise<void> {
    return this.articleRef.remove(key);
  }

  getArticlesList(): AngularFireList<Article> {
    //return this.db.database().ref('articles').orderByChild('metrics/votes');
    return this.articleRef;
  }

  deleteAll(): Promise<void> {
    return this.articleRef.remove();
  }
  //this.articleRef.query.orderByValue().on((a: Article, b: Article) => b.votes - a.votes);

  getArticle(key: string): Observable<any>{
    this.article = this.db.object('articles/{{ key }}')
        .snapshotChanges().pipe(map(res => {
            return res.payload.val();
        }));
    return this.article;
  }

  getItem(id: string) {
    return this.db.object('articles/' + id);
      }
}
