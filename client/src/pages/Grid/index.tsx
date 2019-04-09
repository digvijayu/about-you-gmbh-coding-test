import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from './../../store';
import { SystemState } from './../../store/system/types';
import { updateSession } from './../../store/system/actions';
import { GridState } from './../../store/grid/types';
import { loadProductsThunk } from './../../store/grid/thunks';
import GridProduct from './../../components/GridProduct';
import FilterPanel from './../../components/FilterPanel';
import './style.css';

interface GridProps {
  updateSession: typeof updateSession;
  grid: GridState;
  system: SystemState;
  loadProductsThunk: any;
}

class Grid extends Component<GridProps> {
  componentDidMount() {
    this.props.loadProductsThunk();
  }

  render() {
    const { isLoading, products, activeView } = this.props.grid;
    return (
      <div className="Ay-Grid">
        <FilterPanel />
        <div className="Ay-Grid__grid-products-div">
          {isLoading && <div>loading...</div>}
          {!isLoading &&
            products.map((product, index) => (
              <GridProduct
                product={product}
                key={index}
                viewType={activeView}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  grid: state.grid
});

export default connect(
  mapStateToProps,
  { loadProductsThunk }
)(Grid);
