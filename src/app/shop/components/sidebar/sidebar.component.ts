import { FiltersObject } from './../../../shared/models/filters.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  category: string = '';

  @Output() filters: EventEmitter<FiltersObject> = new EventEmitter();
  @Input() categories$: Observable<Category[]>;

  getCategoryName(category: string): void {
    this.category = category;
  }

  onFiltersChange(from: number, to: number, category: string = ''): void {
    this.filters.emit({
      price: {from, to},
      category: category,
      stock: ''
    });
  }
}
