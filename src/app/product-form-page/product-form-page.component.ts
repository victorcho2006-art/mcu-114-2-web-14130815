import { Component, effect, inject, input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './product-form-page.component.html',
  styleUrl: './product-form-page.component.scss',
})
export class ProductFormPageComponent {
  readonly product = input<Product>();

  private readonly router = inject(Router);
    
  private readonly productService = inject(ProductService);

  protected readonly form = new FormGroup({
    id: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    authors: new FormArray<FormControl<string | null>>([]),
    company: new FormControl<string | null>(null, { validators: [Validators.required] }),
    price: new FormControl<number | null>(null, { validators: [Validators.required] }),
    isShow: new FormControl<boolean>(true, { nonNullable: true }),
  });

  get id(): FormControl<string | null> {
    return this.form.get('id') as FormControl<string | null>;
  }

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get authors(): FormArray<FormControl<string | null>> {
    return this.form.get('authors') as FormArray<FormControl<string | null>>;
  }

  get isShow(): FormControl<boolean> {
    return this.form.get('isShow') as FormControl<boolean>;
  }

  get company(): FormControl<string | null> {
    return this.form.get('company') as FormControl<string | null>;
  }

  get price(): FormControl<string | null> {
    return this.form.get('price') as FormControl<string | null>;
  }

  constructor() {
    effect(() => {
      const product = this.product();
      if (product) {
        this.onAddAuthor(product.authors.length);
        this.form.patchValue(product);
      }
    });
  }

  protected onAddAuthor(count = 1): void {
    for (let i = 1; i <= count; i++) {
      const formControl = new FormControl<string | null>(null, { validators: [Validators.required] });
      this.authors.push(formControl);
    }
  }

  protected onSave(): void {
    const formData = new Product({
      id: this.id.value || undefined,
      name: this.name.value!,
      authors: this.authors.value.map((author) => author!),
      company: this.company.value!,
      isShow: this.isShow.value,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: +(this.price.value || '0'),
    });
    const action$ = this.id.value ? this.productService.update(formData) : this.productService.add(formData);
    action$.subscribe(() => this.router.navigate(['products']));
  }

  protected onCancel(): void {
    this.router.navigate(['products']);
  }
}
