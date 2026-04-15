import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input, model, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  host: { class: 'app-product-card' }
})
export class ProductCardComponent {
  readonly id = input.required<number, string | number>({ transform: numberAttribute });

  readonly productName = input<string>();

  readonly authors = input<string[]>();

  readonly company = input<string>();

  readonly isShow = model.required<boolean>();

  readonly photoUrl = input<string>();

  readonly createDate = input<Date>();

  readonly price = input<number, string | number>(0, { transform: numberAttribute });

  onSetDisplay(isShow: boolean): void {
    this.isShow.set(isShow);
  }
}
