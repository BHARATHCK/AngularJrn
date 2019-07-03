import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{

    console.log(`adding article title : ${title.value} and link : ${link.value}`);

    this.articles.push(new Article(title.value ,link.value , 0));
    title.value = '';
    link.value = '';
    return false;
  }

  constructor(){
    this.articles=[
      new Article('Best Version control Software','https://github.com',10),
      new Article('Best mobile Phone Under 30k','https://oneplus.com',12),
      new Article('Gst rate changes?','https://hindu-news.com',4)
      ];
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}
