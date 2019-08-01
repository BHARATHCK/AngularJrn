import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ArticleService } from '../article.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, BehaviorSubject} from 'rxjs';
import * as firebase from 'firebase/app';
import { AppComponent } from './../../app.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  loading = true;

  userData: Observable<firebase.User>;
  name: string;
  email: string;
  photoUrl: any
  uid: any; 
  emailVerified: any;

  constructor(private authenticationService: AuthenticationService ,private message: NzMessageService , private angularFireAuth: AngularFireAuth , private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.setShowAsFalse();
    this.getProfile();
    this.userData = this.angularFireAuth.user;
    console.log('THE USER DATA IS AS FOLLOWS :: ', this.userData);
  }

  deleteUser(){
    console.log('delete user in profile component triggered');
    this.authenticationService.deleteUser();
    this.message.info('Your Information has been purged and no longer exists with us. Thank You & Farewell');
  }

  getProfile(){
    var user = firebase.auth().currentUser;

    if (user != null) {
      this.name = user.displayName;
      this.email = user.email;
      this.photoUrl = user.photoURL;
      this.emailVerified = user.emailVerified;
      this.uid = user.uid;
  }
}
}
