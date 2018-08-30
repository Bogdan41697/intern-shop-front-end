import { Component, OnInit , OnDestroy } from '@angular/core';

import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { CartState } from '../../../cart/store/reducers/cart.reducer';
import { AddToCart } from './../../../cart/store/actions';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  count: number = 1;
  thumbnailURL: string = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Samsung_Galaxy_S9%2B.png';
  product: Product = {
    id: '5b82dba680a7ce48203557da',
    title: 'Google pixel 2',
    price: 799.99,
    category_id: '1',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Samsung_Galaxy_S9%2B.png',
    category_title: 'phone',
    stock: 77,
    description:
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellat
      molestias illo expedita placeat aut. Rerum distinctio aut, id optio ipsam
      provident libero, quam dolorem sequi iste impedit harum quod aspernatur
      saepe. Architecto totam ratione modi pariatur placeat minus vitae
      voluptatem enim repellendus necessitatibus officia recusandae eligendi
      quos esse, non veniam harum adipisci aliquam rerum sit illum tenetur
      qui magni! Itaque, accusamus, quod autem maxime quasi amet modi in
      culpa tenetur aliquam rerum sed quam voluptatibus error nemo dolor.
      Illo dignissimos facere tempora quaerat sed quo expedita sequi totam.
      Temporibus id a corporis sit commodi necessitatibus voluptatum,
      incidunt nesciunt sint?`
  };
  sub: Subscription;
  id: string;

  constructor(private route: ActivatedRoute, private store: Store<CartState>) {}

  ngOnInit(): void {
    // TODO:
  }

  getProduct(): void {
    this.route.params.subscribe( (params: Params) => {
      const id: string  = params['id'];
    });
  }

  increase(): void {
    if (this.count < this.product.stock) {
      this.count += 1;
    }
  }

  decrease(): void {
    if (this.count > 1) {
      this.count -= 1;
    }
  }

  addToCard(): void {
    this.store.dispatch(new AddToCart({
      product: this.product,
      quantity: this.count
    }));
  }

}
