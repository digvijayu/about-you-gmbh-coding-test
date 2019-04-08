import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from './../../store';
import { SystemState } from './../../store/system/types';
import { updateSession } from './../../store/system/actions';
import { GridState } from './../../store/grid/types';
import { loadProductsThunk } from './../../store/grid/thunks';

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
    return <div>Grid</div>;
  }
}

const mapStateToProps = (state: AppState) => ({
  grid: state.grid
});

export default connect(
  mapStateToProps,
  { loadProductsThunk }
)(Grid);
