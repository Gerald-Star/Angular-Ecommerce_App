import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  // products: any[] = []; // If you don't have a Product model defined

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
    
  }

}
