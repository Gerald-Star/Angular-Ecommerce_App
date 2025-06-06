import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';

// Define the routes for the application
// The empty path redirects to the product list, and the 'products' path displays the product list component
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartViewComponent }
];



@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
