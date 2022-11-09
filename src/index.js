import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import './index.scss';

import NavBar from './routes/Navbar/NavBar.component';
import Shop from './routes/Shop/Shop.component';
import Authentication from './routes/Authentication/Authentication.component';
import Checkout from './routes/Checkout/CheckOut.component';
import { UserProvider } from './contexts/UserContext.context';
import { ProductsProvider } from './contexts/Products.context';
import { CartProvider } from './contexts/Cart.context';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/auth',
        element: <Authentication />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
