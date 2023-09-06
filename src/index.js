import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { New } from './pages/shop/shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <New/> */}
  </React.StrictMode>
);
