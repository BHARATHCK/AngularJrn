import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Article = new Article();
  submitted = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  newArticle(): void {
    console.log('newArticle() triggered');
    this.submitted = false;
    this.article = new Article();
  }

  save() {
    console.log('save() triggered');
    this.articleService.createArticle(this.article);
    this.article = new Article();
  }

  onSubmit() {
    console.log('onSubmit() triggered');
    this.submitted = true;
    this.save();
  }

}
