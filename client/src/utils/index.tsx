import { SUPPORTED_LANGUAGES } from './constants';
import messages_de from './../translations/de.json';
import messages_en from './../translations/en.json';

export const formattedCost = (cost: number, currency: string = '€'): string => {
  return (cost / 100).toString() + ' ' + currency;
};

export const getImageUrl = (hash: string): string => {
  return `//cdn.aboutstatic.com/file/${hash}?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1`;
};

export const isSupportedLanguage = (language: string): boolean =>
  SUPPORTED_LANGUAGES.indexOf(language) > -1;

export const getMessagesForLang = (language: string) => {
  switch (language) {
    case 'en':
      return messages_en;
    case 'de':
      return messages_de;
    default:
      return messages_en;
  }
};
