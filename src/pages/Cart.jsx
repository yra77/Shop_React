

import React, { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container, Button, Badge, Col, Row, Carousel, Stack } from "react-bootstrap";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CardProduct from "../components/card/CardProduct";
import { UseScreenSize } from "../hooks/UseScreenSize";
import FiltersSearch from "../helpers/FiltersSearch";
import { Context } from "../index";
import "../styles/Cart.css";
import BtnPlusMinus from "../components/ui/btn_plus_minus/BtnPlusMinus";


const Cart = observer(() => {

    const navigate = useNavigate();
    const { products } = useContext(Context);
    const { carts } = useContext(Context);
    const height = UseScreenSize() + 45;


    const DataFromFilter = (filtersData) => {
        const arr = FiltersSearch(products, filtersData);
        products.setProductsFilter(arr);
        navigate('/products');
    }

    const Success = () => {
       // console.log(carts.carts);
    }


    return (
        <div className="cartPage" style={{ minHeight: height }}>
            <Header callbackFilterData={DataFromFilter} />

            <Container className="mx-auto mt-2 mb-5">

                <h3 className="fw-bold text-black text-center" >Cart</h3>

                <Row className="justify-content-center" xs="auto">
                    {
                        carts.carts.map(cart =>
                            <Col className="justify-self-center mb-5"
                                key={cart.productId}
                            >
                                <div onClick={() => navigate('/product/' + cart.productId)}>
                                    <CardProduct {...products.products[cart.productId]} />
                                </div>

                                <Stack direction="horizontal" className="d-flex w-100">
                                    
                                    <BtnPlusMinus className="w-60"
                                        maxCountItem={products.products[cart.productId].count}
                                        item={cart} />
                                    
                                    <Button style={{ width: '25%', marginLeft: 'auto' }}
                                        variant="outline-danger">
                                        Delete
                                    </Button>
                                </Stack>

                            </Col>
                        )
                    }
                </Row>

                <Button variant="success"
                    onClick={Success}>
                    Checkout
                </Button>

            </Container>

            <Footer />
        </div>
    );
})

export default Cart;