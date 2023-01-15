import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductsContainerProvider from './components/context/Products';
import './index.css'
import Root from './root';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ProductsContainerProvider>
      <Root />
    </ProductsContainerProvider>
  </React.StrictMode>
)


