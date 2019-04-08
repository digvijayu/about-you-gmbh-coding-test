import React, { Component } from 'react';
import { Product } from './../../types';
import './style.css';

interface GridProductProps {
  product: Product;
}

class GridProduct extends Component<GridProductProps> {
  render() {
    const { product } = this.props;
    return (<div>
        <div className="Ay-Grid__GridProduct__title">{product.name}</div>
        <div className="Ay-Grid__GridProduct__brand">{product.brand.name}</div>
      </div>);
  }
}

export default GridProduct;
