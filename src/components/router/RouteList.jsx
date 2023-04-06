

import React from "react";
import About from "../../pages/About";
import Auth from "../../pages/Auth";
import Products from "../../pages/Products";
import ProductById from "../../pages/ProductById";
import Cart from "../../pages/Cart";
import Home from "../../pages/Home";


export const PrivateRouteList = [
    { path: "/cart", element: <Cart/> },
];

export const PublicRouteList = [
    { path: '/*', element: <Home/> },
    { path: '/auth', element: <Auth /> },
    { path: '/register', element: <Auth/> },
    { path: '/home', element: <Home/> },
    { path: "/products", element: <Products/> },
    { path: "/product/:id", element: <ProductById/> },
    { path: "/about", element: <About/> },
]
