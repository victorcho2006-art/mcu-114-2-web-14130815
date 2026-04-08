import { Component } from '@angular/core';

import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-card-list',
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  protected productName = '書籍 A';
  protected author = '作者甲、作者乙、作者丙';
  protected company = '博碩文化';

  protected isShow = true;

  protected photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';

  protected createDate = new Date('2025/4/9');

  price = 10000;
}
