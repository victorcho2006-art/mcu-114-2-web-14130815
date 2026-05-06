import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, numberAttribute, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent implements OnInit {
  id = input.required<number, string | number>({ transform: numberAttribute });
  
  protected readonly product = signal(new Product());

  private readonly router = inject(Router);

  private readonly productService = inject(ProductService);

  ngOnInit(): void {
    const product = this.productService.getById(this.id());
    this.product.set(product)
  }

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product().id]);
  }

  onRemove(): void {
    this.productService.remove(this.product().id);
    this.router.navigate(['products']);
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}
