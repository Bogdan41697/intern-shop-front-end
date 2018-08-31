import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Product } from './../../shared/models/product.model';
import { tap, catchError, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiEndpoint: string = environment.api_url;

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiEndpoint + '/products').pipe(
      tap((res: { success: boolean; products: Product[] }) => res),
      pluck('products'),
      catchError((error: Error) => {
        console.log('[Products] load error');
        // action products load fail new ProductLoadFail(error)

        return of(null);
      })
    );
  }

  public getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiEndpoint}/products/${id}`).pipe(
      tap((res: { success: boolean; product: Product }) => res),
      pluck('product'),
      catchError((error: Error) => {
        console.log('[Product] load error');
        // action product load fail new ProductLoadFail(error)

        return of(null);
      })
    );
  }
}
