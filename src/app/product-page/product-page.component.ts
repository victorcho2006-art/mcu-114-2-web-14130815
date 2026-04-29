import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-product-page',
  imports: [PaginationComponent, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
private router = inject(Router);

private readonly productService = inject(ProductService);

  protected readonly pageIndex = signal(1);

  protected readonly pageSize = signal(2);

  protected readonly totalCount = signal(0);


   protected readonly products = signal<Product[]>([]);

   constructor() {
    effect(() => {
      const pageIndex = this.pageIndex();
      const pageSize = this.pageSize();
      this.getProducts(pageIndex, pageSize);
    });
  }

  protected onAdd(): void {
    const product = new Product({
      name: '書籍 Z',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date('2025/4/9'),
      price: 10000,
    });
    this.productService.add(product);
    this.getProducts(this.pageIndex(), this.pageSize());
  }

  protected onEdit(product: Product): void {
    this.router.navigate(['product', 'form', product.id]);
  }

  protected onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }

  private getProducts(pageIndex: number, pageSize: number): void {
    const { data, count } = this.productService.getList(undefined, pageIndex, pageSize);
    this.products.set(data);
    this.totalCount.set(count);
  }

  protected onRemove({ id }: Product): void {
    this.productService.remove(id);
    this.pageIndex.set(1);
    this.getProducts(this.pageIndex(), this.pageSize());
  }
}
