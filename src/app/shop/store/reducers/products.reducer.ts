import * as fromProducts from '../actions/products.action';
import { FiltersObject } from '../../../shared/models/filters.model';
import { Product } from '../../../shared/models/product.model';

export interface ProductsState {
  loading: boolean;
  loaded: boolean;
  products: Product[];
  viewMode: string; // 'grid' | 'list'
  filters: FiltersObject;
}

export const initialState: ProductsState = {
  loading: false,
  loaded: false,
  products: [],
  viewMode: 'grid',
  filters: {
    price: null,
    stock: null,
    category: null,
  }
};

export function reducer(
  state = initialState,
  action: fromProducts.ProductsActions
): ProductsState {
  switch (action.type) {
    case fromProducts.LOAD_PRODUCTS: {
      return { ...state, loading: true };
    }

    case fromProducts.LOAD_PRODUCTS_SUCCESS: {
      const products = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        products,
      };
    }

    case fromProducts.APPLY_FILTERS: {
      const filters = action.payload;

      return {
        ...state,
        filters
      };
    }

    case fromProducts.CHANGE_VIEW_MODE: {
      const viewMode = action.payload;

      return {
        ...state,
        viewMode
      };
    }

    case fromProducts.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default: return state;
  }
}

export const getProducts = (state: ProductsState) => state.products;
export const getProductsLoaded = (state: ProductsState) => state.loaded;
export const getProductsLoading = (state: ProductsState) => state.loading;
export const getProductsViewMode = (state: ProductsState) => state.viewMode;
export const getProductsFilters = (state: ProductsState) => state.filters;
