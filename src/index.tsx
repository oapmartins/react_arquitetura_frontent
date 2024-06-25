import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './body/Body';
import Header from './header/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);


