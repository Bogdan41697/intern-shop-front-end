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
    category: null,
    stock: null,
  }
};

export function reducer(
  state: ProductsState = initialState,
  action: fromProducts.ProductsActions
): ProductsState {
  switch (action.type) {
    case fromProducts.LOAD_PRODUCTS: {
      return { ...state, loading: true };
    }

    case fromProducts.LOAD_PRODUCTS_SUCCESS: {
      const products: Product[] = action['payload'];

      return {
        ...state,
        loading: false,
        loaded: true,
        products,
      };
    }

    case fromProducts.APPLY_FILTERS: {
      const filters: FiltersObject = action['payload'];

      return {
        ...state,
        filters
      };
    }

    case fromProducts.CHANGE_VIEW_MODE: {
      const viewMode: string = action['payload'];

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

export const getProducts: any = (state: ProductsState): Product[] => state.products;
export const getProductsLoaded: any = (state: ProductsState): boolean => state.loaded;
export const getProductsLoading: any = (state: ProductsState): boolean => state.loading;
export const getProductsViewMode: any = (state: ProductsState): string => state.viewMode;
export const getProductsFilters: any = (state: ProductsState): FiltersObject => state.filters;
