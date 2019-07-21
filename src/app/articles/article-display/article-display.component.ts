import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { NzMessageService } from 'ng-zorro-antd';
import { MatRippleModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router"
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.css'],
  providers: [MarkdownModule]
})
export class ArticleDisplayComponent implements OnInit {

  handle_get_article: any;
  articles: Article[];
  article_content: any;
  i: number;

  constructor(private _Activatedroute: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this._Activatedroute.queryParams.subscribe(params => { this.handle_get_article = params['nav']; });
    console.log('THE DISPLAY COMPONENT GOT TRIGGERED, THE ARTICLE KEY IS : ', this.handle_get_article);
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
      console.log('$$$$$$$$$$$$$$$$$$$$', articles, this.articles[0].key);
      for(this.i=0 ; this.i<articles.length ; this.i++){
        if(this.articles[this.i].key === this.handle_get_article){
          console.log('IF CONDITION SATISFIED :::::::::: ');
          this.article_content = this.articles[this.i].article_content;
        }
      }
    });
  }
}
