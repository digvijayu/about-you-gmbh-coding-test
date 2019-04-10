import {
  GridState,
  GridActionTypes,
  REQUEST_PRODUCTS,
  PRODUCTS_RECEIVED,
  PRODUCTS_REQUEST_FAILED,
  CHANGE_VIEW,
  CHANGE_SORT_BY
} from './types';

import { GridViewType, GridSortType, Product } from './../../types';

const initialState: GridState = {
  products: [],
  error: null,
  isLoading: true,
  activeView: GridViewType.PRODUCT_VIEW,
  selectedSortBy: GridSortType.HIGHEST_PRICE
};

export function gridReducer(
  state = initialState,
  action: GridActionTypes
): GridState {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        products: [],
        error: null,
        isLoading: true
      };
    case PRODUCTS_RECEIVED:
      return {
        ...state,
        products: sortProducts(state.selectedSortBy, action.products),
        error: null,
        isLoading: false
      };
    case PRODUCTS_REQUEST_FAILED:
      return {
        ...state,
        products: [],
        error: action.error,
        isLoading: false
      };
    case CHANGE_VIEW:
      return {
        ...state,
        activeView: action.view
      };
    case CHANGE_SORT_BY:
      return {
        ...state,
        selectedSortBy: action.sortBy,
        products: sortProducts(action.sortBy, state.products)
      };
    default:
      return state;
  }
}

const sortProducts = (sortBy: GridSortType, products: Product[]): Product[] => {
  switch (sortBy) {
    case GridSortType.HIGHEST_PRICE:
      return products.sort(
        (product1: Product, product2: Product) =>
          product2.priceSummary.withTax - product1.priceSummary.withTax
      );
    case GridSortType.LOWEST_PRICE:
      return products.sort(
        (product1: Product, product2: Product) =>
          product1.priceSummary.withTax - product2.priceSummary.withTax
      );
    default:
      return products;
  }
};
