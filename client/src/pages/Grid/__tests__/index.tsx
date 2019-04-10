import React from 'react';
import { mount } from 'enzyme';
import testBed from './../../../helpers/TestBed';
import Grid from './../index';
import { productsReceived } from './../../../store/grid/actions';

describe('should test the component, Grid', () => {
  it('should render the component', () => {
    const { jsx } = testBed(<Grid />);
    const grid = mount(jsx);
    expect(grid.find('FilterPanel').instance()).not.toBeNull();
    expect(
      grid.find('.Ay-Grid__grid-products__loading').instance()
    ).not.toBeNull();
  });

  it('should display grid if items are loaded', () => {
    const { jsx, store } = testBed(<Grid />);
    const grid = mount(jsx);
    expect(grid.find('FilterPanel').instance()).not.toBeNull();
    expect(
      grid.find('.Ay-Grid__grid-products__loading').instance()
    ).not.toBeNull();

    store.dispatch(
      productsReceived([
        {
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
        }
      ])
    );
    grid.update();
    expect(grid.find('GridProduct').instance()).not.toBeNull();
  });
});
