import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Optional, for notifications
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexModule,
    MatSnackBarModule,// Optional, for notifications
    MatInputModule // Optional, if you want to add search functionality
  ]
})
export class ProductModule { }
