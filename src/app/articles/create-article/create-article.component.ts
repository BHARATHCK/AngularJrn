import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Article } from '../article';
import { ArticleService } from '../article.service';

import {Router} from "@angular/router"

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  validateForm: FormGroup;
  article: Article = new Article();
  submitted = false;

  constructor(private articleService: ArticleService, private fb: FormBuilder , private routerLink: Router) { }


  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      link: [null, [Validators.required]],
      desc: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
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

  submitForm(): void {
    console.log('onSubmit() triggered {{article.title}} , {{article.link}} , {{article.desc}}');
    this.save();
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.routerLink.navigate(['articles']);

  }

}
