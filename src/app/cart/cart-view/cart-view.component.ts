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
  totalPrice: number = 0;


  constructor(private cartService: CartService) {}

  
  /* ===============================================================
    Using ngOnInit lifecycle hook to fetch cart items
    ================================================================
    This method is called once the component is initialized
    Fetch cart items when the component initializes
    Get the data from the cart service and assign it to the cartItems property
    This will allow us to display the cart items in the template
  */
  ngOnInit(): void {
      this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
      //console.log('Cart items fetched successfully:', this.cartItems);
      this.totalPrice = this.getTotalPrice(); // Calculate total price after fetching items
    })
  }

  // Calculate total price of items in the cart
  getTotalPrice(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price; // Assuming each product has a price property
    }
    return total;
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe();
    /*() => {
    this.cartItems = [];
    this.totalPrice = 0;
    console.log('Cart cleared successfully');
  }, error => {
    console.error('Error clearing cart:', error);
  });
}*/
  };

  checkout(): void {
    this.cartService.checkout(this.cartItems).subscribe();
  }
  


  
  
};