import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from './../../store';
import { changeView } from './../../store/grid/actions';
import { GridViewType, GridSortType } from './../../types';
import './style.css';

interface FilterPanelProps {
  activeView: GridViewType;
  selectedSortBy: GridSortType;
  changeView: any;
}

class FilterPanel extends Component<FilterPanelProps> {
  render() {
    const { activeView, selectedSortBy } = this.props;
    return (
      <div className="Ay-FilterPanel">
        <div className="Ay-FilterPanel__active-view-div">
          <span
            className={
              'Ay-FilterPanel__active-view-option ' +
              (activeView === GridViewType.MODEL_VIEW
                ? 'Ay-FilterPanel__active-view-option--active'
                : '')
            }
            onClick={() => this.props.changeView(GridViewType.MODEL_VIEW)}
          >
            Model View
          </span>
          <span className="Ay-FilterPanel__active-view-seperator">|</span>
          <span
            className={
              'Ay-FilterPanel__active-view-option ' +
              (activeView === GridViewType.PRODUCT_VIEW
                ? 'Ay-FilterPanel__active-view-option--active'
                : '')
            }
            onClick={() => this.props.changeView(GridViewType.PRODUCT_VIEW)}
          >
            Product View
          </span>
        </div>
        <div className="Ay-FilterPanel__sort-by-div" />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  activeView: state.grid.activeView,
  selectedSortBy: state.grid.selectedSortBy
});

export default connect(
  mapStateToProps,
  { changeView }
)(FilterPanel);
