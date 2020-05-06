import { NotifService } from './../../notif.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'upd-notif',
  templateUrl: './upd-notif.component.html',
  styleUrls: ['./upd-notif.component.css']
})
export class UpdNotifComponent implements OnInit {
  id;
  notif:any = {};
  constructor(
    private router: Router,
    private notifService: NotifService, 
    private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.notifService.get(this.id).valueChanges().pipe(take(1)).subscribe(n => this.notif = n);
  }

  save(notif){ 
    if (this.id) this.notifService.update(this.id, notif);
    else this.notifService.create(notif);

    this.router.navigate(['/admin/notif']);
  }
  delete(){
    if (!confirm('Are You Sure?')) return;

    this.notifService.delete(this.id);
    this.router.navigate(['/admin/notif']);
    
  }

  ngOnInit(): void {
  }

}
