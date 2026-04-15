import { Component, EventEmitter, Input, numberAttribute, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
  @Input({ required: true, transform: numberAttribute })
  totalCount !: number;

  @Input({ required: true, transform: numberAttribute })
  pageSize!: number;

  @Input({ required: true, transform: numberAttribute })
  pageIndex!: number;
  @Output()
  pageIndexChange = new EventEmitter<number>();
    
  range: number[] = [];

  ngOnChanges(): void {
    const length = Math.ceil(this.totalCount / this.pageSize);
    this.range = Array.from({ length }, (_, i) => i + 1);
  }
}
