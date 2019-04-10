import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import { DEFAULT_LANGUAGE } from './utils/constants';
import { isSupportedLanguage, getMessagesForLang } from './utils';

addLocaleData([...locale_en, ...locale_de]);

const store = configureStore();

const Root = () => {
  let language: string = navigator.language.split(/[-_]/)[0]; // language without region code
  language = isSupportedLanguage(language) ? language : DEFAULT_LANGUAGE;
  return (
    <Provider store={store}>
      <IntlProvider locale={language} messages={getMessagesForLang(language)}>
        <App />
      </IntlProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
