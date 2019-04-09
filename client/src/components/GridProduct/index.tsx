import React, { Component } from 'react';
import { Product, GridViewType } from './../../types';
import { formattedCost, getImageUrl } from './../../utils';
import './style.css';

interface GridProductProps {
  product: Product;
  viewType: GridViewType;
}

class GridProduct extends Component<GridProductProps> {
  render() {
    const { product, viewType } = this.props;
    const image =
      viewType === GridViewType.PRODUCT_VIEW
        ? product.images.imageBustFirst
        : product.images.imageModelFirst;
    return (
      <div className="Ay-GridProduct">
        <div
          className="Ay-GridProduct__image-div"
          style={{
            backgroundImage: "url('" + getImageUrl(image.hash) + "')"
          }}
        />
        <div className="Ay-GridProduct__name--div">
          <div className="Ay-GridProduct__name--col-left">
            <div className="Ay-GridProduct__title">{product.name}</div>
            <div className="Ay-GridProduct__brand">{product.brand.name}</div>
          </div>
          <div className="Ay-GridProduct__name--col-right">
            <div className="Ay-GridProduct__price">
              {formattedCost(product.priceSummary.withTax)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GridProduct;
