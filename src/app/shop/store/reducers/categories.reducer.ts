import { Category } from '../../../shared/models/category.model';
import * as fromCategories from '../actions/categories.action';

export interface CategoriesState {
  loading: boolean;
  loaded: boolean;
  categories: Category[];
}

export const initialState: CategoriesState = {
  loading: false,
  loaded: false,
  categories: []
};

export function reducer(
  state: CategoriesState = initialState,
  action: fromCategories.CategoriesActions
): CategoriesState {
  switch (action.type) {
    case fromCategories.LOAD_CATEGORIES: {
      return {
        ...state,
        loading: true
      };
    }

    case fromCategories.LOAD_CATEGORIES_SUCCESS: {
      const categories: Category[] = action['payload'];

      return {
        ...state,
        loading: false,
        loaded: true,
        categories
      };
    }

    case fromCategories.LOAD_CATEGORIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    default: return state;
  }
}

export const getCategoriesIsLoading: any = (state: CategoriesState): boolean => state.loading;
export const getCategoriesIsLoaded: any = (state: CategoriesState): boolean => state.loaded;
export const getCategories: any = (state: CategoriesState): Category[] => state.categories;
