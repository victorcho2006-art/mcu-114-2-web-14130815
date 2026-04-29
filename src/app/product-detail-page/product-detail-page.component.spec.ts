import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPageComponent } from './product-detail-page.component';

describe('ProductDetailPageComponent', () => {
  let component: ProductDetailPageComponent;
  let fixture: ComponentFixture<ProductDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
