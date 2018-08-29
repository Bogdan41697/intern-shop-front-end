import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';
import { Product } from '../../../shared/models/product.model';
import { Category } from '../../../shared/models/category.model';
import { Filters } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  products$: Observable<Product[]>;
  viewMode$: Observable<string>;
  categories: Category[];

  constructor(private store: Store<any>) {
    // TODO
  }

  ngOnInit(): void {

    this.viewMode$ = of('grid');
    this.products$ = of([
      { id: '1', thumbnail: '', title: 'Title1', description: 'Description1', category_id: '1', category_title: 'Mobile', price: '15000', stock: 38 },
      { id: '2', thumbnail: '', title: 'Title2', description: 'Description2', category_id: '2', category_title: 'Mobile', price: '1500', stock: 64 },
      { id: '3', thumbnail: '', title: 'Title', description: 'Description4', category_id: '4', category_title: 'Mobile', price: '13500', stock: 2 }
    ]);
    this.categories = [
      { id: '1', title: 'Phones', description: 'description1' },
      { id: '2', title: 'Cars', description: 'description2' },
      { id: '3', title: 'SmartPhones', description: 'description3' },
      { id: '4', title: 'Computers', description: 'description4' }
    ];
  }

  filters(filters: Filters): void {
    // TODO dispatch to store
  }

  private addToCart($event: string): void {
    // TODO dispatch to card
    // event - id
  }
}
