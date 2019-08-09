import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  public userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth , private message: NzMessageService) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
        this.message.info(error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    console.log('SIGNIN TRIGGERED :: ');
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
        this.message.info(err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.angularFireAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }

  deleteUser(){
    var User = firebase.auth().currentUser;
    User.delete();
  }

}