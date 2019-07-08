import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: any;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticleList();
  }

  getArticleList() {
    this.articleService.getArticlesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(articles => {
      this.articles = articles;
    });
  }

  deleteArticles() {
    this.articleService.deleteAll().catch(err => console.log(err));
  }

}
