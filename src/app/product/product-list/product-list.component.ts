import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for notifications (optional)


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  // products: any[] = []; // If you don't have a Product model defined
  filteredProducts: Product[] =[]; // Array to hold filtered products based on search term
  
  
  constructor(private productService: ProductService,
    private cartService: CartService, // Injecting CartService to handle cart operations
    private snackbar: MatSnackBar // Injecting MatSnackBar for notifications (optional, if you want to show notifications when adding to cart)

  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
    
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        //console.log(`${product.name} added to cart successfully.`);
        this.snackbar.open("Product added to cart!", '', {
          duration: 2000, // Duration in milliseconds
          horizontalPosition: 'right', // Position of the snackbar
          verticalPosition: 'top' // Position of the snackbar
        });
      }
    });
  }


  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.trim().toLowerCase(); // Trim and convert to lowercase for case-insensitive search
    
    this.filteredProducts = this.products.filter(
      product => product.name.toLowerCase().includes(searchTerm)
    )
 
  }
}