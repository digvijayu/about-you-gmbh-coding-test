import { Product, GridViewType, GridSortType } from './../../types';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED';
export const PRODUCTS_REQUEST_FAILED = 'PRODUCTS_REQUEST_FAILED';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CHANGE_SORT_BY = 'CHANGE_SORT_BY';

export interface GridState {
  products: Product[];
  error: Error | null;
  isLoading: Boolean;
  activeView: GridViewType;
  selectedSortBy: GridSortType;
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

interface ChangeViewAction {
  type: typeof CHANGE_VIEW;
  view: GridViewType;
}

interface ChangeSortByAction {
  type: typeof CHANGE_SORT_BY;
  sortBy: GridSortType;
}

export type GridActionTypes =
  | RequestProductsAction
  | ProductsReceivedAction
  | ProductsRequestFailedAction
  | ChangeViewAction
  | ChangeSortByAction;
