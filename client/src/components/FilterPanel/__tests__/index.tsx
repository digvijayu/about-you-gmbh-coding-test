import React from 'react';
import { mount } from 'enzyme';
import FilterPanel from './../index';
import testBed from './../../../helpers/TestBed';

describe('should test the component FilterPanel', () => {
  it('should render the component', () => {
    const { jsx } = testBed(<FilterPanel />);
    const filter = mount(jsx);
    expect(
      filter.find('.Ay-FilterPanel__active-view-div').instance()
    ).not.toBeNull();
    expect(
      filter
        .find('.Ay-FilterPanel__active-view-option')
        .first()
        .text()
    ).toBe('Model View');
    expect(
      filter
        .find('.Ay-FilterPanel__active-view-option')
        .at(1)
        .text()
    ).toBe('Product View');
  });

  it('should by default select the product view', () => {
    const { jsx } = testBed(<FilterPanel />);
    const filter = mount(jsx);
    expect(
      filter
        .find('.Ay-FilterPanel__active-view-option--active')
        .first()
        .text()
    ).toBe('Product View');
  });

  it('should be able to change the view', () => {
    const { jsx } = testBed(<FilterPanel />);
    const filter = mount(jsx);
    expect(
      filter.find('.Ay-FilterPanel__active-view-option--active').text()
    ).toBe('Product View');
    filter
      .find('.Ay-FilterPanel__active-view-option')
      .at(0)
      .simulate('click');
    filter.update();
    expect(
      filter.find('.Ay-FilterPanel__active-view-option--active').text()
    ).toBe('Model View');
  });

  it('should display default sort by highest price', () => {
    const { jsx } = testBed(<FilterPanel />);
    const filter = mount(jsx);
    expect(filter.find('.Ay-FilterPanel__sort-by-select')).not.toBeNull();
    expect(filter.find('.Ay-FilterPanel__sort-by-select').props().value).toBe(
      'HIGHEST_PRICE'
    );
  });

  it('should allow user to change the sort by', () => {
    const { jsx } = testBed(<FilterPanel />);
    const filter = mount(jsx);
    expect(filter.find('.Ay-FilterPanel__sort-by-select').props().value).toBe(
      'HIGHEST_PRICE'
    );
    filter
      .find('.Ay-FilterPanel__sort-by-select')
      .simulate('change', { target: { value: 'LOWEST_PRICE' } });
    filter.update();
    expect(filter.find('.Ay-FilterPanel__sort-by-select').props().value).toBe(
      'LOWEST_PRICE'
    );
  });
});
