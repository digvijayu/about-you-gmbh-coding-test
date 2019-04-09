import {
  GridState,
  GridActionTypes,
  REQUEST_PRODUCTS,
  PRODUCTS_RECEIVED,
  PRODUCTS_REQUEST_FAILED,
  CHANGE_VIEW
} from './types';

import { GridViewType, GridSortType } from './../../types';

const initialState: GridState = {
  products: [],
  error: null,
  isLoading: true,
  activeView: GridViewType.PRODUCT_VIEW,
  selectedSortBy: GridSortType.HIGHEST_REDUCTION
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
        products: action.products,
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
    default:
      return state;
  }
}
