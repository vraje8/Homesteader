import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdNotifComponent } from './upd-notif.component';

describe('UpdNotifComponent', () => {
  let component: UpdNotifComponent;
  let fixture: ComponentFixture<UpdNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
