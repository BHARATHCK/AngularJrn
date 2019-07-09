import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-delete-all-articles',
  templateUrl: './delete-all-articles.component.html',
  styleUrls: ['./delete-all-articles.component.css']
})
export class DeleteAllArticlesComponent implements OnInit {

  constructor(private routerLink: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.deleteAll();
    this.routerLink.navigate(['articles/']);
  }

}
