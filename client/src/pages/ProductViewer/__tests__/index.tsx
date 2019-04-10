import React from 'react';
import { mount } from 'enzyme';
import testBed from './../../../helpers/TestBed';
import ProductViewer from './../index';

describe('should test component ProductViewer', () => {
  it('should render the component', () => {
    const { jsx } = testBed(
          <ProductViewer/>
    );
    const productViewer = mount(jsx);

    expect(
      productViewer.find('.Ay-ProductViewer__no-product-found').instance()
    ).not.toBeNull();
  });
});
