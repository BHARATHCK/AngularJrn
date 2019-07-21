import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { NzMessageService } from 'ng-zorro-antd';
import {MatRippleModule} from '@angular/material/core';
import { DatePipe } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  providers: [DatePipe]
})
export class ArticleDetailsComponent implements OnInit {


  @Input() article: Article;
  visible = false;
  placement = 'bottom';
  myDate = new Date();

  constructor(private articleService: ArticleService , private nzMessageService: NzMessageService , private datePipe: DatePipe , private routerLink: Router) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.articleService
      .updateArticle(this.article.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteArticle() {
    this.articleService
      .deleteArticle(this.article.key)
      .catch(err => console.log(err));
  }

  upVoteArticle() {
    let fooVotes = this.article.votes;
    console.log('THIS IS THE VOTES RETREIVED FROM MODEL ARTICLE (upVote): ', fooVotes);
    fooVotes = fooVotes + 1;
    this.articleService
      .updateArticle(this.article.key, { votes:  fooVotes})
      .catch(err => console.log(err));
  }

  downVoteArticle() {
    let fooVotes = this.article.votes;
    console.log('THIS IS THE VOTES RETREIVED FROM MODEL ARTICLE (downVote): ', fooVotes);
    fooVotes = fooVotes - 1;
    this.articleService
      .updateArticle(this.article.key, { votes:  fooVotes})
      .catch(err => console.log(err));
  }

  confirm(){
    this.deleteArticle();
    this.nzMessageService.info('the article has been deleted');
  }

  cancel(){
    this.nzMessageService.info('Ohhfff! That was close, Looks like you changed your mind');
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  
  navtodisplay(){
    console.log('NAVTODISPLAY TRIGGERED : ',this.article.key);
    this.routerLink.navigate(['display/'], {queryParams: {'nav': this.article.key}});
  }

}

