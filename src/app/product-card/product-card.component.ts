import { CurrencyPipe, DatePipe } from '@angular/common';
import { booleanAttribute, Component, input, model, numberAttribute, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  host: { class: 'app-product-card' }
})
export class ProductCardComponent {
  readonly id = input.required<string>();

  readonly productName = input<string>();

  readonly authors = input<string[]>();

  readonly company = input<string>();

  readonly isShow = input.required<boolean, string | boolean>({ transform: booleanAttribute });

  readonly photoUrl = input<string>();

  readonly createDate = input<Date>();

  readonly price = input<number, string | number>(0, { transform: numberAttribute });

  readonly edit = output<void>();

  readonly remove = output<void>();

  readonly view = output<void>();
}
