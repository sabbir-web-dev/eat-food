import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FoodProvider from './context/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FoodProvider>
    <App />
  </FoodProvider>
);
reportWebVitals();
