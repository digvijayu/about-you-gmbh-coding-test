import { Product, GridViewType } from './../../types';
import {
  REQUEST_PRODUCTS,
  PRODUCTS_RECEIVED,
  PRODUCTS_REQUEST_FAILED,
  CHANGE_VIEW,
  GridActionTypes
} from './types';

export function requestProducts(): GridActionTypes {
  return {
    type: REQUEST_PRODUCTS
  };
}

export function productsReceived(products: Product[]): GridActionTypes {
  return {
    type: PRODUCTS_RECEIVED,
    products
  };
}

export function productsRequestFailed(error: Error): GridActionTypes {
  return {
    type: PRODUCTS_REQUEST_FAILED,
    error
  };
}

export function changeView(view: GridViewType): GridActionTypes {
  return {
    type: CHANGE_VIEW,
    view
  };
}
