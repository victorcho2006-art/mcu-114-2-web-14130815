import { Component, input, signal } from '@angular/core';

import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../model/product';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-product-card-list',
  imports: [PaginationComponent, ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  readonly products = input<Product[]>([]);

  readonly pageIndex = signal(1);
}
