import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import messages from './locales/en/messages.json'

const container = document.getElementById('root')!;
const root = createRoot(container);

i18n.load('en', messages)
i18n.activate('en')

root.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
    </I18nProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
