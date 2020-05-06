import { NotifService } from './../../notif.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-notif',
  templateUrl: './admin-notif.component.html',
  styleUrls: ['./admin-notif.component.css']
})
export class AdminNotifComponent implements OnInit {
  notif$;
  constructor(private notifService: NotifService) {
    this.notif$ = this.notifService.getAll()
   }

  ngOnInit(): void {
  }

}
