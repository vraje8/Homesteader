import { AuthService } from './../auth.service';
import { AddDataService } from './../add-data.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { UserService } from '../user.service';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';


@Component({
  selector: 'add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  id;
  userId;
  data:any = {};
  constructor(
    private router: Router,
    private addData: AddDataService,
    private dataService: AddDataService, 
    private route: ActivatedRoute,
    private userService: UserService,
    private afAuth: AuthService,
    private db: AngularFireDatabase,
    ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.dataService.get(this.id).valueChanges().pipe(take(1)).subscribe(n => this.data = n);
      this.userId = firebase.auth().currentUser.uid;
  }
  save(data){ 
    if (this.id) this.dataService.update(this.id, data);
    else this.dataService.create(this.userId, data);

    this.router.navigate(['/view-records']);
  }

  ngOnInit(): void {
  }

}
