import { Component } from '@angular/core';
import { select, Store} from '@ngrx/store';
import { AuthState } from '../../auth/store/reducers/auth.reducers';
import { SignOutAction } from '../../auth/store/actions/auth.actions';
import { Observable } from 'rxjs';
import * as authStore from '../../auth/store';
import { CartItem } from '../../cart/store/reducers/cart.reducer';
import * as cartSelectors from '../../cart/store/selectors/cart.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isAuthorized$: Observable<boolean>;
  totalCount$: Observable<{[key: string]: CartItem}>;

  constructor(private store: Store<AuthState>) {
    this.isAuthorized$ = this.store.pipe(select(authStore.getIsAuthenticated));
    this.totalCount$ = this.store.select(cartSelectors.getTotalCount);
  }

  signOut(): void {
    this.store.dispatch(new SignOutAction());
  }
}
