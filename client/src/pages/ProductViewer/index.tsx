import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AppState } from './../../store';
import { Product } from './../../types';
import { formattedCost, getImageUrl } from './../../utils';
import './style.css';

interface Params {
  id: number;
}

interface ProductViewerProps {
  products: Product[];
}

class ProductViewer extends Component<
  ProductViewerProps & RouteComponentProps
> {
  getProductDetails(): Product | null {
    let params = this.props.match.params as Params;
    let productWithId = this.props.products.filter(
      (product: Product) => product.id == params.id
    );
    return productWithId.length > 0 ? productWithId[0] : null;
  }

  render() {
    let product: Product | null = this.getProductDetails();
    return (
      <div className="Ay-ProductViewer">
        {!product && (
          <div className="Ay-ProductViewer__no-product-found">
            No Product Found. <Link to="/">Take me home</Link>
          </div>
        )}
        {product && (
          <>
            <div
              className="Ay-ProductViewer__image-div"
              style={{
                backgroundImage:
                  "url('" +
                  getImageUrl(product.images.imageBustFirst.hash) +
                  "')"
              }}
            />
            <div className="Ay-ProductViewer__details-div">
              <div className="Ay-ProductViewer__details-div__title">
                {product.name}
              </div>
              <div className="Ay-ProductViewer__details-div__brand">
                {product.brand.name}
              </div>
              <div className="Ay-ProductViewer__details-div__cost">
                {formattedCost(product.priceSummary.withTax)}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  products: state.grid.products
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(ProductViewer)
);
