import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { MatCardModule } from '@angular/material/card'; // Assuming you have a cart module in Angular Material
import { MatListModule } from '@angular/material/list'; // For displaying cart items in a list
import { MatButtonModule } from '@angular/material/button'; // For cart actions like checkout or clear cart
import { MatIconModule } from '@angular/material/icon'; // For icons in the cart view


@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CartModule { }
