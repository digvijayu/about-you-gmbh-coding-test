import { Action } from 'redux';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import {
  requestProducts,
  productsReceived,
  productsRequestFailed
} from './actions';
import { GridState } from './types';
import { Product } from './../../types';

export const loadProductsThunk = (): ThunkAction<
  void,
  GridState,
  null,
  Action<string>
> => async dispatch => {
  console.log('here');
  dispatch(requestProducts());
  apiRequest()
    .then(res => dispatch(productsReceived(res)))
    .catch(err => dispatch(productsRequestFailed(err)));
};

function apiRequest(): Promise<Product[]> {
  return axios
    .get('/api/products')
    .then(response => response.data as Product[]) as Promise<Product[]>;
}
