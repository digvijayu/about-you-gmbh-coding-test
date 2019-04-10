import React from 'react';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';

import Adapter from 'enzyme-adapter-react-16';
import configureStore from './../store';
import { isSupportedLanguage, getMessagesForLang } from './../utils';
import { DEFAULT_LANGUAGE } from './../utils/constants';

addLocaleData([...locale_en, ...locale_de]);

configure({ adapter: new Adapter() });
let lang: string = navigator.language.split(/[-_]/)[0]; // language without region code

function testBed(component: any, config: { lang: string } = { lang: lang }) {
  const store = configureStore();

  var language = isSupportedLanguage(config.lang)
    ? config.lang
    : DEFAULT_LANGUAGE;
  const jsx = (
    <Provider store={store}>
      <IntlProvider locale={lang} messages={getMessagesForLang(language)}>
        {React.cloneElement(component)}
      </IntlProvider>
    </Provider>
  );
  return {
    jsx,
    store
  };
}

export default testBed;
