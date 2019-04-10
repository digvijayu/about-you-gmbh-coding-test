import React from 'react';
import { mount } from 'enzyme';
import Text from './../index';
import testBed from './../../../helpers/TestBed';

describe('should test the text component wrapper', () => {
  it('should render as it is if no text was found', () => {
    const { jsx } = testBed(<Text>some</Text>);
    const text = mount(jsx);
    expect(text.find('Text').text()).toBe('some');
  });

  it('should render proper text in english translation', () => {
    const { jsx } = testBed(<Text>Test.Text1</Text>);
    const text = mount(jsx);
    expect(text.find('Text').text()).toBe('Some Test Text');
  });

  it('should render proper text in german translation', () => {
    const { jsx } = testBed(<Text>Test.Text1</Text>, { lang: 'de' });
    const text = mount(jsx);
    expect(text.find('Text').text()).toBe('Etwas Testtext');
  });

  it('should render proper text in german with params', () => {
    const { jsx } = testBed(
      <Text values={{ param: 'custom-param' }}>Test.Text.With.Param</Text>,
      { lang: 'de' }
    );
    const text = mount(jsx);
    expect(text.find('Text').text()).toBe(
      'Text mit dem Parameter custom-param'
    );
  });
});
