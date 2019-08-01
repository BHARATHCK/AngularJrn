import { Component , ViewChild, AfterViewInit,ElementRef} from '@angular/core';
import { AuthenticationService } from '../app/articles/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButton} from '@angular/material/button';
import { NzMessageService } from 'ng-zorro-antd';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'redditClone';

  email: string;
  password: string;
  validateForm: FormGroup;
  show: boolean;


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }



  constructor(public authenticationService: AuthenticationService, private fb: FormBuilder , private message: NzMessageService) { }

  setShowAsTrue(){
    this.show = true;
  }  

  setShowAsFalse(){
    this.show = false;
  }

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.setShowAsTrue();
  }

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.setShowAsTrue();
  }

  signOut() {
    this.authenticationService.SignOut();
    this.setShowAsFalse();
  }

  doGoogleLogin(){
    this.authenticationService.doGoogleLogin();
    this.setShowAsTrue();
  }

  doFacebookLogin(){
    this.message.info('SORRY! SERVICE UNDER DEVELOPMENT');
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    });
  }
}

