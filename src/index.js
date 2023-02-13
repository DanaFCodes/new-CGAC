import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/App.css';
import Marketplace from './Marketplace/Marketplace';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // what does react.strictmode do???????
  <React.StrictMode> 

    <Marketplace />
  </React.StrictMode>
);


