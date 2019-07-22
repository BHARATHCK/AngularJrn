import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ArticleService } from '../article.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, BehaviorSubject} from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData: Observable<firebase.User>;

  constructor(private authenticationService: AuthenticationService ,private message: NzMessageService , private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.userData = this.angularFireAuth.user;
    console.log('THE USER DATA IS AS FOLLOWS :: ', this.userData);
  }

  deleteUser(){
    console.log('delete user in profile component triggered');
    this.authenticationService.deleteUser();
    this.message.info('Your Information has been purged and no longer exists with us. Thank You & Farewell');
  }
}
