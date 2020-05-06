import { AngularFireDatabase } from '@angular/fire/database';

import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';



export class Data{
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class AddDataService {
  

  constructor(private db: AngularFireDatabase) {
    
   }
  
    create(userId, data){
      return this.db.list('/userData/data' + userId).push(data);
    }
    getAll(){
      return this.db.list('/userData/data').snapshotChanges();
    }
    getAll2(userId){
      return this.db.list('/userData/data' + userId).valueChanges();
    }
    get(dataId){
      return this.db.object('/userData/data/' + dataId);
    }
    update(dataId, data){
      return this.db.object('/userData/data/' +dataId).update(data);
    } 
    save(user: firebase.User){
      this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email
      });
    }
    getId(uid: string): Observable<any> {
      return this.db.object('/users/' + uid).valueChanges();
    }


}
