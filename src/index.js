

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from "react";

import CartStor from "./store/CartStor";
import UserStor from "./store/UserStor";
import ProductsStor from "./store/ProductsStor";


export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <Context.Provider value={{
      user: new UserStor(),
      products: new ProductsStor(),
      carts:new CartStor()
    }}>

      <App />

    </Context.Provider>
    
  </React.StrictMode>
);