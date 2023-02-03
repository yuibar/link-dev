import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
// import App from './app/app';
import { WebApp } from 'web-ui';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <WebApp />
  </StrictMode>
);
