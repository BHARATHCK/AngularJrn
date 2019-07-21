import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ArticleService } from '../article.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-delete-all-articles',
  templateUrl: './delete-all-articles.component.html',
  styleUrls: ['./delete-all-articles.component.css']
})
export class DeleteAllArticlesComponent implements OnInit {

  constructor(private routerLink: Router, private articleService: ArticleService, private notification: NzNotificationService) { }

  ngOnInit() {
    this.notification.blank('System Message', 'This feature has been disabled by developer, please check git timeline for furthur info');
    //this.articleService.deleteAll();
    this.routerLink.navigate(['articles/']);
  }

}
