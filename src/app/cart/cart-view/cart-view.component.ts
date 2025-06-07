import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = [];


  constructor(private cartService: CartService) { }

  // Using ngOnInit lifecycle hook to fetch cart items
  // Fetch cart items when the component initializes
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
        this.cartItems = data;
        //console.log('Cart items fetched successfully:', this.cartItems);
      });
   
  }
}
