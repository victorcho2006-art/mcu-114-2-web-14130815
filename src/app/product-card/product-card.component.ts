import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  protected productName = '書籍 A';
  protected author = '作者甲、作者乙、作者丙';
  protected company = '博碩文化';

  protected isShow = true;

  protected onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
