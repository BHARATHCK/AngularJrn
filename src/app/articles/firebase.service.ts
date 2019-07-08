import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  listArticlesByVotes(){
    return this.db.collection('articles', ref => ref.orderBy('votes'));
  }
}
