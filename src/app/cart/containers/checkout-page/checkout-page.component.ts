import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripeService, StripeCardComponent, ElementOptions, ElementEventType } from 'ngx-stripe';
import { Store, select } from '@ngrx/store';
import { getCartProducts } from '../../store/selectors';
import { getAuthenticatedUser } from '../../../auth/store';

import { Product } from '../../../shared/models/product.model';
import { Observable } from 'rxjs';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  stripeTest: FormGroup;
  isCardDataValid: boolean = false;

  // TODO: set styles to stripe fields
  cardOptions: ElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      vaultNumber: ['', Validators.required]
    });
  }

  onChange(e: {type: ElementEventType, event: any}): void {
    if (e.type === 'change') {
      this.isCardDataValid = !e.event.empty && !e.event.error && e.event.complete;
    }
  }

  get formIsValid(): boolean {
    return this.stripeTest.valid && this.isCardDataValid;
  }

  buy(): void {
    this.generateOrder();
    const name: string = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe((result: any) => {
        if (result.token) {
          console.log(result.token.id);
        } else if (result.error) {
          console.log(result.error.message);
        }
      });
  }

  generateOrder(): any {
    let order: Order;
    this.store.pipe(
      select(getCartProducts)
    ).subscribe(data => console.log(data));

    this.store.pipe(
      select(getAuthenticatedUser)
    ).subscribe(user => console.log(user));
  }
}
