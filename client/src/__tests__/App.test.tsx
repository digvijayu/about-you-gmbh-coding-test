import React from 'react';
import { mount } from 'enzyme';
import App from './../App';
import testBed from './../helpers/TestBed';

it('renders without crashing', () => {
  const { jsx } = testBed(<App />);
  const app = mount(jsx);
  expect(app.find('Grid').instance()).not.toBeNull();
});
