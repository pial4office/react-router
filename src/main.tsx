import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <h1>App-1</h1>
      <App />
    </BrowserRouter>
    <MemoryRouter>
      <h1>App-2</h1>
      <App />
    </MemoryRouter>
    <HashRouter>
      <h1>App-3</h1>
      <App />
    </HashRouter>
  </React.StrictMode>
);
