import { AddDataService } from './../add-data.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.css']
})
export class ViewRecordsComponent implements OnInit {
  data$;
  userId;
  constructor(private addData: AddDataService) {
    this.userId = firebase.auth().currentUser.uid;
    this.data$ = this.addData.getAll2(this.userId);
   }

  ngOnInit(): void {
  }

}
