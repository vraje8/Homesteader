import { ProductService } from './../../product.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from "src/app/models/product";

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent{
  products$;
  
  
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
        
   }

 


}
