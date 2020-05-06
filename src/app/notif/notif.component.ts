import { NotifService } from './../notif.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {
  notif$;
  

  constructor(notifService: NotifService) { 
    this.notif$ = notifService.getAll2();
  }

  ngOnInit(): void {
  }

}
