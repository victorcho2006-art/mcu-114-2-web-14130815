import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { rxResource } from '@angular/core/rxjs-interop';

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

  protected readonly pageSize = signal(5);

  private readonly data = rxResource({
    params: () => ({ pageIndex: this.pageIndex(), pageSize: this.pageSize() }),
    defaultValue: { data: [], count: 0 },
    stream: ({ params }) => {
      const { pageIndex, pageSize } = params;
      return this.productService.getList(undefined, pageIndex, pageSize);
    },
  });

  protected readonly totalCount = computed(() => {
    const { count } = this.data.value();
    return count;
  });

  protected readonly products = computed(() => {
    const { data } = this.data.value();
    return data;
  });
  
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
    this.productService.add(product).subscribe(() => this.data.reload());
  }

  protected onEdit(product: Product): void {
    this.router.navigate(['product', 'form', product.id]);
  }

  protected onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }

  protected onRemove({ id }: Product): void {
    this.productService.remove(id).subscribe(() => this.pageIndex.set(1));
  }
}
