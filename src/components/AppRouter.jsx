

import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../index";
import { PrivateRouteList, PublicRouteList } from "./router/RouteList";


const AppRouter = () => {

    const { user } = useContext(Context);
   
    return (
        <Routes>
            {
                (user.isAuth)
                && PrivateRouteList.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} />)
            }
            {
                PublicRouteList.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} />)
            }
        </Routes>
    );
}

export default AppRouter;