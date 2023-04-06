

import React, { useState, useContext} from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { elastic as Menu } from 'react-burger-menu';
import { Context } from "../../../index";
import './Sidebar.css';


const Sidebar = observer(() => {
     
    const { user } = useContext(Context);
    const [isopen, SetIsOpen] = useState(false);

    const Logout = () => {
        SetIsOpen(false);
        user.setIsAuth(false);
    }

    const Login = () => {
        SetIsOpen(false);
        user.setIsAuth(true);
    }

    return (
        <Menu isOpen={isopen}
            onStateChange={(state) => SetIsOpen(state.isOpen)}>

            <Link to="/home" onClick={() => SetIsOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => SetIsOpen(false)}>Products</Link>
            <Link to="/about" onClick={() => SetIsOpen(false)}>About</Link>

            {
                (user.isAuth)
                    ? <nav className="sideBarNav">
                        <Link to="/cart" onClick={() => SetIsOpen(false)}>Cart</Link>
                        <Link to="/home" className="logout" onClick={Logout}>Exit</Link>
                    </nav>
                    : <Link to="/auth" className="login" onClick={Login}>Log In</Link>
            }
        </Menu>
    );
})

export default Sidebar;