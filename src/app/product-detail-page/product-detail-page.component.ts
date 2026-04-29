import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-detail-page',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  protected readonly product = signal(new Product({
    id: 9,
    name: '書籍 I',
    authors: ['作者甲', '作者乙', '作者丙'],
    company: '博碩文化',
    isShow: true,
    photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    createDate: new Date('2025/4/9'),
    price: 10000,
  }));

  private readonly router = inject(Router);

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product.id]);
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}
