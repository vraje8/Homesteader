import { AuthService } from './../auth.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products$;
  appUser: AppUser;
  

  constructor(productService: ProductService, private auth: AuthService) { 
    this.products$ = productService.getAll2();
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    
  }

 

}
