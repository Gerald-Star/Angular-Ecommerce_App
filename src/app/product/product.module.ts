import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Optional, for notifications
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule, // CommonModule is necessary for Angular directives like ngIf, ngFor
    MatCardModule, // Material Card for product display
    MatButtonModule, // Material Button for actions like "Add to Cart"
    FlexModule, // Flex Layout for responsive design
    MatSnackBarModule,// Optional, for notifications
    MatInputModule, // Optional, if you want to add search functionality
    MatSelectModule // Optional, if you want to add filtering functionality
  ]
})
export class ProductModule { }
