

import React, { memo, useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container, Navbar, Button, Form, Nav, Badge } from "react-bootstrap";

import { SearchString } from "../../helpers/Search";
import { CurrentPageMarker } from "./CurrentPageMarker";
import { Context } from "../../index";
import Modal from "../ui/modal/Modal"
import Brand from "../brand_bar/Brand";
import Filter from "./Filter";
import "./Header.css";

import iconFilter from "../../images/filter.png";
import iconCart from "../../images/cart.png";
import iconLogo from "../../images/logo.png";
import iconUp from "../../images/ic_up.png";
import { UseScrollTop } from "../../hooks/UseScrollTop";


const Header = observer(({ callbackFilterData }) => {


    const [showButton, SetShowButton] = useState(false);
    const [modal, SetModal] = useState(false);
    const [isToggle, SetIsToggle] = useState(false);
    const [inputValue, SetInputValue] = useState('');
    const navigate = useNavigate();
    const { user } = useContext(Context);
    const { products } = useContext(Context);

    const addClass = useRef('');
    const location = useLocation();

    useEffect(() => {
        CurrentPageMarker(addClass, location);
    }, [location]);

    UseScrollTop({ SetShowButton });

    const FilterData = (filterData) => {
        callbackFilterData(filterData);
        // console.log(filterData);
        SetModal(false);
    }

    const SearchClick = () => {
        let arr = SearchString(products.products, inputValue);
        products.setProductsFilter(arr);
        navigate('/products');
    }

    const Logout = () => {
        user.setIsAuth(false);
    }

    const Login = () => {
        user.setIsAuth(true);
    }

    const OnToggle = (expanded) => {
        SetIsToggle(expanded);
    }

    const ClickScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" onToggle={OnToggle} >

                {/* Modal */}
                <Modal visible={modal} SetVisible={SetModal}>
                    {(modal) && <Filter callback={FilterData} />}
                </Modal >

                <Container fluid className="headerContainer">

                    <Navbar.Brand href="/home">
                        <img src={iconLogo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo" />
                        <h6>Shop</h6>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"
                        className="mb-2 shadow-none" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav ref={addClass} className={(isToggle) ? "mr-auto" : "headerMenu"}>
                            <Link to='/home'>Home</Link>
                            <Link to='/products'>Products</Link>
                            {
                                (user.isAuth) && <Link to='/cart'>Cart</Link>
                            }
                            <Link to='/about'>About</Link>

                            {
                                (user.isAuth)
                                    ? <Link to="/home"
                                        className="logout"
                                        style={{ marginTop: isToggle && '1em', marginLeft: !isToggle && '1em' }}
                                        onClick={Logout}
                                    >
                                        Exit
                                    </Link>

                                    : <Link to="/auth"
                                        className="login"
                                        onClick={Login}
                                        style={{ marginTop: isToggle && '1em', marginLeft: !isToggle && '1em' }}
                                    >
                                        Log In
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>

                    <Form className="d-inline-flex headerForm" style={{ marginTop: isToggle && '2em' }}>
                        <Form.Control placeholder="search"
                            type="text"
                            className="mr-sm-1 shadow-none bg-light border-info"
                            onChange={event => SetInputValue(event.target.value)}
                        />

                        <Button variant="outline-info btn btn-sm-1"
                            onClick={SearchClick}
                        >
                            Search
                        </Button>

                        <Button variant="outline-info btn"
                            title="Filters"
                            onClick={() => { SetModal(true) }}>
                            <img src={iconFilter} alt="filters" />
                        </Button>
                    </Form>

                </Container>
            </Navbar>

            <Brand />

            {
                (user.isAuth) &&
                <Button variant="btn rounded-circle"
                    className="iconCartBtn">
                    <img height={18} width={18} src={iconCart} alt="icon cart" />
                    <Badge pill bg="danger">{user.cart.length}</Badge>
                </Button>
            }
            {
                (showButton) &&
                <img src={iconUp}
                    alt="arrow top"
                    onClick={ClickScrollTop}
                    className="buttonScrollTop"
                />
            }
        </>
    );
})

export default memo(Header);