import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import HomePage from './pages/home';

import common_fr from './intl/fr.json';
import common_en from './intl/en.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

i18next.use(initReactI18next).use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  fallbackLng: 'en',
  resources: {
    fr: common_fr,
    en: common_en,
  },
  react: {
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'span', 'b'],
  },
});

const App = () => {
  return (
    <HomePage />
  );
};

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App/>
  </I18nextProvider>,
  document.getElementById('app')
);
