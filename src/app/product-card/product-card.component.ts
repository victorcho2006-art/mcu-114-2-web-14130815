import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  host: { class: 'app-product-card' }
})
export class ProductCardComponent {
  @Input({ required: true, transform: numberAttribute })
  id!: number;

  @Input()
  productName!: string;

  @Input()
  author!: string;

  @Input()
  company!: string;

  @Input()
  isShow!: boolean;
  @Output()
  isShowChange = new EventEmitter<boolean>();
  
  @Input()
  photoUrl!: string;
  
  @Input()
  createDate!: Date;

  @Input({ transform: numberAttribute })
  price!: number;

  protected onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}
