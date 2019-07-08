import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction} from '@angular/fire/database';
import { Observable, BehaviorSubject} from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private dbPath = '/articles';

  articleRef: AngularFireList<Article> = null;


  fooArray: any;
  items: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  group: BehaviorSubject<any>;

  constructor(public db: AngularFireDatabase) {
    this.articleRef = db.list(this.dbPath);
  }

  createArticle(article: Article): void {
    this.articleRef.push(article);
  }

  updateArticle(key: string, value: any): Promise<void> {
    return this.articleRef.update(key, value);
  }

  deleteArticle(key: string): Promise<void> {
    return this.articleRef.remove(key);
  }

  getArticlesList(): AngularFireList<Article> {
    return this.articleRef;
  }

  deleteAll(): Promise<void> {
    return this.articleRef.remove();
  }
  //this.articleRef.query.orderByValue().on((a: Article, b: Article) => b.votes - a.votes);
}
