import { FiltersObject } from './../models/filters.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {
  query: string = '';
  priceQuery: string = '';
  categoryQuery: string = '';
  stockQuery: string = '';

  constructor(private http: HttpClient) {}

  getProducts(filters: FiltersObject = {}): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8000/products?${this.setFilters(filters)}`);
  }

  setFilters(filtersObj): string {
    let query = '';
    let priceQuery = '';
    let categoryQuery = '';
    let stockQuery = '';


    if (filtersObj && filtersObj.price) {
      priceQuery = this.priceQuery;
      priceQuery = `price=${filtersObj['price']['from']} to ${filtersObj['price']['to']}?`;
      this.priceQuery = priceQuery;
      query = this.query;
      if (query.match('price')) {
        return;
      } else {
        query += priceQuery;
      }
    }
    if (priceQuery === 'price= to ') {
      query = this.slicer(query, priceQuery);
    }

    // if (filtersObj && filtersObj.category) {
    //   categoryQuery = `category=${filtersObj['category']}?`;
    //   query += categoryQuery;
    // }
    // if (priceQuery === 'category=') {
    //   query = this.slicer(query, categoryQuery);
    // }

    return query;
  }

  slicer(query, subQuery): string {
    let str = query.split('?');
    str.splice(str.indexOf(subQuery), 1);
    let newStr = str.join('?');

    return (subQuery === '') ? `?${newStr}` : newStr;
  }
}
