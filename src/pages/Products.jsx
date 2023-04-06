

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container, Col, Row } from "react-bootstrap";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { UseScreenSize } from "../hooks/UseScreenSize";
import CardProduct from "../components/card/CardProduct";
import Search from "../helpers/FiltersSearch";
import { Context } from "../index";
import "../styles/Products.css"


const Products = observer(() => {
    
    const navigate = useNavigate();
    const { products } = useContext(Context);
    const height = UseScreenSize() + 45;


    const DataFromFilter = (filtersData) => {
        const arr = Search(products, filtersData);   
        products.setProductsFilter(arr);
        //console.log(filterData);
    }


    return (
        <div className="productPage" style={{ minHeight: height }}>

            <Header callbackFilterData={DataFromFilter} />

            <Container className="mx-auto mt-5 mb-5">

                <Row className="justify-content-center" xs="auto">
                    {
                        (products.productsFilter.length > 0)?
                        products.productsFilter.map(product =>
                            
                            <Col className="justify-self-center mb-5"
                                key={product.name}
                                onClick={() => navigate('/product/' + product.id)}
                            >
                                <CardProduct {...product} />
                            </Col>)
                        :<h4 className="text-center text-info">Nothing found!</h4>
                    }
                </Row>
            </Container>

            <Footer />
        </div>
    );
})

export default Products;