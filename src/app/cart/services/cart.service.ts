import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProductsToCart(): Observable<Product[]> {
      return this.http.get<Product[]>('../../../assets/cart-products.json');
  }
}
