import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  dummyArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{

    console.log(`adding article title : ${title.value} and link : ${link.value}`);
    
    return false;
  }

  addDesc(title: HTMLInputElement, link: HTMLInputElement, desc: HTMLInputElement): boolean{
    console.log(`ARTICLE TITLE,LINK & DESC : ${title.value} , ${link.value} , ${desc.value}`);

    this.articles.push(new Article(title.value, link.value , desc.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  closeModal(title: HTMLInputElement, link: HTMLInputElement, desc: HTMLInputElement): boolean{

    title.value = '';
    link.value = '';

    return false;
  }

  constructor(){
    this.articles=[
      new Article('Best Version control Software','https://github.com','GitHub brings together the worlds largest community of developers to discover, share, and build better software. From open source projects to private team ...',10),
      new Article('Best mobile Phone Under 30k','https://oneplus.com','OnePlus creates beautifully designed products with premium build quality & brings the best technology to users around the world. No tradeoffs, we #NeverSettle.',12),
      new Article('Gst rate changes?','https://hindu-news.com','NOTHING TO DESCRIBE',4)
      ];
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}
