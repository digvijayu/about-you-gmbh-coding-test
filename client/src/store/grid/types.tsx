import { Product, GridViewType } from './../../types';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED';
export const PRODUCTS_REQUEST_FAILED = 'PRODUCTS_REQUEST_FAILED';

export interface GridState {
  products: Product[];
  error: Error | null;
  isLoading: Boolean;
  activeView: GridViewType;
}

interface RequestProductsAction {
  type: typeof REQUEST_PRODUCTS;
}

interface ProductsReceivedAction {
  type: typeof PRODUCTS_RECEIVED;
  products: Product[];
}

interface ProductsRequestFailedAction {
  type: typeof PRODUCTS_REQUEST_FAILED;
  error: Error;
}

export type GridActionTypes =
  | RequestProductsAction
  | ProductsReceivedAction
  | ProductsRequestFailedAction;
