import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as fromServices from '../../../shared/services';
import * as categoriesActions from '../actions/categories.action';

@Injectable()
export class CategoriesEffects {
  constructor(
    private fromServices: fromServices.CategoriesService,
    private actions$: Actions
  ) {}

  @Effect()
  loadCategories$ = this.actions$.ofType(categoriesActions.LOAD_CATEGORIES).pipe(
    switchMap(() => {
      return this.fromServices
      .getCategories()
      .pipe(
        map(categories => new categoriesActions.LoadCategoriesSuccess(categories)),
        catchError(error => of(new categoriesActions.LoadCategoriesFail(error)))
      )
    })
  ) 
}
