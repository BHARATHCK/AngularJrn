import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ArticleService } from '../article.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import { Observable, of } from 'rxjs';
import { delay, share } from 'rxjs/operators';
import { Article } from './../article';
import * as firebase from 'firebase';
import { AppComponent } from './../../app.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  showLoader: boolean = true;
  articles: any;
  notifyValue: any;
  public notifyValueBoolean: boolean;

  constructor(private articleService: ArticleService, private _Activatedroute: ActivatedRoute, private notification: NzNotificationService , private appComponent:AppComponent) {

  }

  ngOnInit() {

   // this.appComponent.setShowAsFalse();

    this.getArticleList();
    


    this._Activatedroute.queryParams.subscribe(params => { this.notifyValue = params['foo']; });

    // this.notifyValue = this._Activatedroute.snapshot.paramMap.get("foo");

    if (this.notifyValue == 1) {
      this.notifyValueBoolean = true;
    }
    if (this.notifyValue && this.notifyValueBoolean) {

      this.notification.blank('INFO ABOUT YOUR POST !', 'YOUR ARTICLE HAS BEEN SUCCESSFULLY POSTED AND CAN BE SEEN BY OTHERS');

      this.notifyValueBoolean = false;
    }
  }


  /*

this.sub=this._Activatedroute.paramMap.subscribe(params => { 
         console.log(params);
          this.id = params.get('id'); 



          //ksdljfksdlj

  */

  getArticleList() {
    this.articleService.getArticlesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(articles => {
      this.articles = articles;
      this.showLoader = false;
    });
  }

  deleteArticles() {
    this.notification.blank('System Message', 'This feature has been disabled for the time being, Check git repo for the timeline overview thank you!');
    //this.articleService.deleteAll().catch(err => console.log(err));
  }

}
