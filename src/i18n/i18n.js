import I18n from 'react-native-i18n';
import en from './locales/en';
import kh from './locales/kh';

I18n.fallbacks = true;
I18n.defaultLocale = "en";

I18n.translations = {
  en,
  kh
};

export default I18n;
