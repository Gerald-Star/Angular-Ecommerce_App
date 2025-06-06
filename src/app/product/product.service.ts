import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

/*
* 2. Access the API URL via environment
=====================================================================================
*Setting up Observable and HttpClient for product.service.ts to fetch API data
=====================================================================================
ProductService is responsible for fetching product data from the API.
It uses HttpClient to make HTTP requests to the backend API.
It returns an Observable of Product array, which can be subscribed to in components.
This service is part of the Angular service architecture.
=====================================================================================
*Observable is used to handle asynchronous data streams.
*HttpClient is used to make HTTP requests to the backend API.
====================================================================================
*/

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl + "/products"

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
