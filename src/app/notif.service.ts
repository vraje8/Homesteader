import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor(private db: AngularFireDatabase) { }
  create(notif){
    return this.db.list('/notif').push(notif);
  }
  getAll(){
    return this.db.list('/notif').snapshotChanges();
  }
  getAll2(){
    return this.db.list('/notif').valueChanges();
  }
  get(notifId){
    return this.db.object('/notif/' + notifId);
  }
  update(notifId, notif){
    return this.db.object('/notif/' +notifId).update(notif);
  }
  delete(notifId){
    return this.db.object('/notif/' +notifId).remove();
  }
}
