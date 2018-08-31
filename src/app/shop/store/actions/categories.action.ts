import { Action } from '@ngrx/store';
import { Category } from '../../../shared/models/category.model';

export const LOAD_CATEGORIES: string = '[Categories] Load Categories';
export const LOAD_CATEGORIES_FAIL: string = '[Categories] Load Categories Fail';
export const LOAD_CATEGORIES_SUCCESS: string = '[Categories] Load Categories Success';

export class LoadCategories implements Action {
  readonly type: string = LOAD_CATEGORIES;
}

export class LoadCategoriesSuccess implements Action {
  readonly type: string = LOAD_CATEGORIES_SUCCESS;
  constructor(public payload: Category[]) { }
}

export class LoadCategoriesFail implements Action {
  readonly type: string = LOAD_CATEGORIES_FAIL;
  constructor(public payload: any) { }
}

export type CategoriesActions = LoadCategories | LoadCategoriesSuccess | LoadCategoriesFail;
