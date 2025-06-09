import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 
  // apiUrl is constructed using the environment variable to ensure it points to the correct backend API endpoint
  private apiCartUrl = environment.apiUrl + '/cart';
  private apiCheckoutUrl = environment.apiUrl + '/checkout';

  // constructor to inject HttpClient for making HTTP requests
  // This service will handle cart operations like adding items, fetching cart items, and clearing the cart
  constructor(private http: HttpClient) { }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiCartUrl, product);
  }
  
  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiCartUrl);
  }

  checkout(products: Product[]): Observable<void> {
    return this.http.post<void>(this.apiCheckoutUrl, products);
  }

}