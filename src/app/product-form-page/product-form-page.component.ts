import { Component, input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { Product } from '../model/product';

@Component({
  selector: 'app-product-form-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './product-form-page.component.html',
  styleUrl: './product-form-page.component.scss',
})
export class ProductFormPageComponent {
  readonly product = input<Product>();

  protected readonly form = new FormGroup({
    id: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null),
    authors: new FormArray<FormControl<string | null>>([]),
    company: new FormControl<string | null>(null),
    price: new FormControl<number | null>(null),
  });

  get authors(): FormArray<FormControl<string | null>> {
    return this.form.get('authors') as FormArray<FormControl<string | null>>;
  }

  protected onAddAuthor(): void {
    const formControl = new FormControl<string | null>(null);
    this.authors.push(formControl);
  }
}
