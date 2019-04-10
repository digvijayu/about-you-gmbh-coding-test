import React from 'react';
import { mount } from 'enzyme';

import GridProduct from './../index';
import testBed from './../../../helpers/TestBed';
import { GridViewType } from './../../../types';

const product = {
  id: 245646,
  name: 'Feinripp-Spaghettitops',
  isSoldOut: false,
  priceSummary: {
    withTax: 2499,
    withoutTax: 2100,
    referencePrice: {
      withTax: 833,
      size: 1,
      unit: 'Stk'
    },
    isFromPrice: true
  },
  brand: {
    id: 57371,
    name: 'H.I.S'
  },
  images: {
    imageModelFirst: {
      hash: 'model-image-hash',
      type: 'bust',
      trim: true,
      brightness: 0.96,
      focus: 'product',
      view: 'front',
      priority: 502
    },
    imageBustFirst: {
      hash: 'product-image-hash',
      type: 'bust',
      trim: true,
      brightness: 0.96,
      focus: 'product',
      view: 'front',
      priority: 1002
    },
    imagesModelFirst: [
      {
        hash: '858231adcc5b6a09b57b37d863592851',
        type: 'bust',
        trim: true,
        brightness: 0.96,
        focus: 'product',
        view: 'front',
        priority: 502
      }
    ],
    imagesBustFirst: [
      {
        hash: '858231adcc5b6a09b57b37d863592851',
        type: 'bust',
        trim: true,
        brightness: 0.96,
        focus: 'product',
        view: 'front',
        priority: 1002
      }
    ]
  },
  attributes: {
    new: false,
    premium: false,
    quantityPerPack: 3,
    bigSize: false,
    isSoldOut: false,
    color: ''
  },
  categories: [
    {
      id: 20201,
      name: 'Frauen',
      url: '/frauen'
    },
    {
      id: 20204,
      name: 'Bekleidung',
      url: '/frauen/bekleidung'
    },
    {
      id: 20255,
      name: 'Tops',
      url: '/frauen/bekleidung/tops'
    },
    {
      id: 100192,
      name: 'Spaghetti Tops',
      url: '/frauen/bekleidung/tops/spaghetti-tops'
    }
  ],
  containingCategoryIds: [
    20201,
    20204,
    20285,
    220437,
    20255,
    100192,
    227522,
    227523,
    227524
  ]
};

describe('should test component, GridProduct', () => {
  it('should render the product details', () => {
    const { jsx } = testBed(
      <GridProduct product={product} viewType={GridViewType.MODEL_VIEW} />
    );
    const gridProduct = mount(jsx);
    expect(gridProduct.find('.Ay-GridProduct__title').text()).toBe(
      'Feinripp-Spaghettitops'
    );
    expect(gridProduct.find('.Ay-GridProduct__brand').text()).toBe('H.I.S');
    expect(gridProduct.find('.Ay-GridProduct__price').text()).toBe('24.99 €');
    expect(
      gridProduct.find('.Ay-GridProduct__image-div').get(0).props.style
    ).toHaveProperty(
      'backgroundImage',
      "url('//cdn.aboutstatic.com/file/model-image-hash?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1')"
    );
  });

  it('should render model image', () => {
    const { jsx } = testBed(
      <GridProduct product={product} viewType={GridViewType.MODEL_VIEW} />
    );
    const gridProduct = mount(jsx);
    expect(
      gridProduct.find('.Ay-GridProduct__image-div').get(0).props.style
    ).toHaveProperty(
      'backgroundImage',
      "url('//cdn.aboutstatic.com/file/model-image-hash?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1')"
    );
  });

  it('should render product image', () => {
    const { jsx } = testBed(
      <GridProduct product={product} viewType={GridViewType.PRODUCT_VIEW} />
    );
    const gridProduct = mount(jsx);
    expect(
      gridProduct.find('.Ay-GridProduct__image-div').get(0).props.style
    ).toHaveProperty(
      'backgroundImage',
      "url('//cdn.aboutstatic.com/file/product-image-hash?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1')"
    );
  });
});
