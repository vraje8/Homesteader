import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  appUser: AppUser;

  constructor(private auth: AuthService) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  

}
