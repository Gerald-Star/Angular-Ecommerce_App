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
  filteredProducts: Product[] = []; // Array to hold filtered products based on search term
  sortOrder: string = ''; // Default sort order
  // sortOrder: string = 'price-asc'; // Default sort order, can be changed to 'price-desc', 'name-asc', 'name-desc' as needed
  
  
  constructor(private productService: ProductService,
    private cartService: CartService, // Injecting CartService to handle cart operations
    private snackbar: MatSnackBar // Injecting MatSnackBar for notifications (optional, if you want to show notifications when adding to cart)

  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data; // Initialize filteredProducts with all products
      //console.log('Products fetched successfully:', this.products);
    }, error => {
      console.error('Error fetching products:', error);
      // Handle error appropriately, e.g., show an error message to the user
      this.snackbar.open("Failed to load products. Please try again later.", '', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'right', // Position of the snackbar
        verticalPosition: 'top' // Position of the snackbar
      });
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

    // If you want to filter by other properties, you can extend the filter condition
    this.sortProducts(this.sortOrder); // Reapply sorting after filtering
 
  }

  /*
  sortProducts(sortValue : string): void {
    if (sortValue === 'price-asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name-asc') {
      this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'name-desc') {
      this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
  }
  */

// Additional methods for sorting, filtering, etc. can be added here
  sortProducts(sortValue: string): void {
   this.sortOrder = sortValue;
  if(this.sortOrder === 'priceLowHigh') {
    this.filteredProducts.sort((a, b) => a.price - b.price);
  } else if(this.sortOrder === 'priceHighLow') {
    this.filteredProducts.sort((a, b) => b.price - a.price);
  } else if(this.sortOrder === 'name-asc') {
    this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if(this.sortOrder === 'name-desc') {
    this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }
}
  
  
  
}