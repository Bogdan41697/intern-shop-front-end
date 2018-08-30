import { Category } from "../../../shared/models/category.model";
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
  state = initialState,
  action: fromCategories.CategoryActions
): CategoriesState {
  switch(action.type) {
    case fromCategories.LOAD_CATEGORIES: {
      return {
        ...state,
        loading: true
      }
    }

    case fromCategories.LOAD_CATEGORIES_SUCCESS: {
      const categories = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        categories
      }
    }

    case fromCategories.LOAD_CATEGORIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }

    default: return state;
  }
}

export const getCategoriesIsLoading = (state: CategoriesState) => state.loading;
export const getCategoriesIsLoaded = (state: CategoriesState) => state.loaded;
export const getCategories = (state: CategoriesState) => state.categories;
