import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ArticleService } from '../article.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';
import { AppComponent } from './../../app.component';
import { NzModalService } from 'ng-zorro-antd';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  showLoader: boolean = true;
  visible: boolean = false;
  placement = 'bottom';

  userData: Observable<firebase.User>;
  user: Observable<firebase.User>;
  name: any;
  email: any;
  photoUrl: any;
  uid: any;
  emailVerified: any;

  constructor(private authenticationService: AuthenticationService, private message: NzMessageService, private angularFireAuth: AngularFireAuth, private appComponent: AppComponent , private nzModal: NzModalService) { }

  ngOnInit() {
    this.getProfile();
    setTimeout(() => {
      this.angularFireAuth.user.subscribe(() => this.setShowLoaderAsFalse());
    }, 1000);
    console.log('THE USER DATA IS AS FOLLOWS :: ', this.userData);
  }

  editProfile(){
    
  }

  setShowLoaderAsFalse() {
    console.log('SHOWLOADER IS NOW ', this.showLoader);
    this.showLoader = false;
    console.log('SHOWLOADER IS NOW ', this.showLoader);
  }

  deleteUser() {
    console.log('delete user in profile component triggered');
    this.authenticationService.deleteUser();
    this.message.info('Your Information has been purged and no longer exists with us. Thank You & Farewell');
  }

  getProfileWithObservable() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('USER WITH OBSERVABLE : ', user);
        this.name = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoURL;
        this.emailVerified = user.emailVerified;
        this.uid = user.uid;
      }
      else {
        // RE-AUTHENTICATE
      }
    });
  }

  getProfile() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.name = user.displayName;
      this.email = user.email;
      this.photoUrl = user.photoURL;
      this.emailVerified = user.emailVerified;
      this.uid = user.uid;
    }
  }

  open(){
    this.visible = true;
  }

  close(){
    this.visible = false;
  }
}
