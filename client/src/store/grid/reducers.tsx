import {
  GridState,
  GridActionTypes,
  REQUEST_PRODUCTS,
  PRODUCTS_RECEIVED,
  PRODUCTS_REQUEST_FAILED
} from './types';

const initialState: GridState = {
  products: [],
  error: null,
  isLoading: true
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
    default:
      return state;
  }
}
