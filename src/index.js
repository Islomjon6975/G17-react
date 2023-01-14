import React from 'react';
import ReactDOM from 'react-dom/client';
import BeckendContextProvider from './context/Beckend';
import FrontEndProvider from './context/FrontEnd';
import './index.css'
import Root from './root';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <FrontEndProvider>
      <BeckendContextProvider>
        <Root />
      </BeckendContextProvider>
    </FrontEndProvider>
  </React.StrictMode>
)


