import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/scss/index.scss';
import '../src/styles/scss/layout.scss'
import App from './App';
import { AuthProvider } from './services/authContext/AuthContext';
import i18n from './i18n';
import { LanguageProvider } from './services/langContext/languageContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LanguageProvider>
  </React.StrictMode>
);
