import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { AppState } from './../../store';
import { changeView, changeSortBy } from './../../store/grid/actions';
import { GridViewType, GridSortType } from './../../types';
import Text from './../Text';
import './style.css';

interface FilterPanelProps {
  activeView: GridViewType;
  selectedSortBy: GridSortType;
  changeView: any;
  changeSortBy: any;
}

class FilterPanel extends Component<FilterPanelProps & InjectedIntlProps> {
  handleOnSelectChange(selectedIndex: string) {
    let sortByValue: GridSortType;
    switch (selectedIndex) {
      case 'HIGHEST_PRICE':
        sortByValue = GridSortType.HIGHEST_PRICE;
        break;
      case 'LOWEST_PRICE':
        sortByValue = GridSortType.LOWEST_PRICE;
        break;
      default:
        sortByValue = GridSortType.LOWEST_PRICE;
    }
    this.props.changeSortBy(sortByValue);
  }

  render() {
    const { activeView, selectedSortBy, intl } = this.props;
    console.log('selectedSortBy', selectedSortBy);
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
            <Text>Filter.Model.View.Text</Text>
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
            <Text>Filter.Product.View.Text</Text>
          </span>
        </div>
        <div className="Ay-FilterPanel__sort-by-div">
          <select
            className="Ay-FilterPanel__sort-by-select"
            value={GridSortType[selectedSortBy]}
            onChange={val => {
              this.handleOnSelectChange(val.target.value as string);
            }}
          >
            <option value={GridSortType[GridSortType.HIGHEST_PRICE]}>
              {intl.formatMessage({ id: 'Sort.Option.Highest.Price' })}
            </option>
            <option value={GridSortType[GridSortType.LOWEST_PRICE]}>
              {intl.formatMessage({ id: 'Sort.Option.Lowest.Price' })}
            </option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  activeView: state.grid.activeView,
  selectedSortBy: state.grid.selectedSortBy
});

export default injectIntl(
  connect(
    mapStateToProps,
    { changeView, changeSortBy }
  )(FilterPanel)
);
