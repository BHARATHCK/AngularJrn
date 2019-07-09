import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {


  @Input() article: Article;

  constructor(private articleService: ArticleService , private nzMessageService: NzMessageService) { }

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

}

