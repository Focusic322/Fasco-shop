import React from 'react';
import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Fashion from './Components/Fashion/Fashion.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Product from './Components/Product/Product.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import Register from './Components/Register/Register.jsx';
import Cart from './Components/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: '/cart', 
    element: <Cart />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/fullpage',
    element: <App />
  },
  {
    path: "/shop",
    element: <Fashion />,
  },
  {
    path: "/product/:id",
    element: <Product />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
