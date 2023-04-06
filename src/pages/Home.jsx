

import React, { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container, Button, Badge, Col, Row, Carousel } from "react-bootstrap";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CardProduct from "../components/card/CardProduct";
import { UseScreenSize } from "../hooks/UseScreenSize";
import FiltersSearch from "../helpers/FiltersSearch";
import { Context } from "../index";
import "../styles/Home.css";


const Home = observer(() => {

    const navigate = useNavigate();
    const [productNew, SetProductNew] = useState([]);
    const [productBest, SetProductBest] = useState([]);
    const { products } = useContext(Context);
    const height = UseScreenSize() + 45;

    useMemo(() => {
        SetProductNew(products.products.filter((item) => item.isNew === true));
        SetProductBest(products.products.filter((item) => item.isBestSeller === true));
    }, [products.products]);
    
    const DataFromFilter = (filtersData) => {
        const arr = FiltersSearch(products, filtersData);   
         products.setProductsFilter(arr);
         navigate('/products');
    }


    return (
        <div className="home" style={{ minHeight: height }}>

            <Header callbackFilterData={DataFromFilter} />

            <h3 className="titlesH3" >New Collection</h3>

            <Container className="carouselContainer">

                <Carousel style={{cursor: 'pointer'}}>
                    {
                        productNew.map((item, index) =>
                            <Carousel.Item key={index}
                                onClick={() => navigate('/product/' + item.id)}
                            >
                                <img src={item.img[0]}
                                    alt={item.name}
                                />

                                <Carousel.Caption className="captionNew">
                                    <h4 className="fw-bold">${item.price}</h4>
                                </Carousel.Caption>

                                {
                                    (item.isNew) &&
                                    <Carousel.Caption className="captionBest">
                                        <h4>New</h4>
                                        <h3 className="text-white">{item.brand} {item.name}</h3>
                                    </Carousel.Caption>
                                }
                            </Carousel.Item>)
                    }
                </Carousel>
            </Container>


            <Container className="mx-auto mt-2 mb-5">

                <h3 className="fw-bold text-black text-start" >Best shoes</h3>

                <Row className="justify-content-center" xs="auto">
                    {
                        productBest.map(product =>
                            <Col className="justify-self-center mb-5"
                                key={product.name}
                                onClick={() => navigate('/product/' + product.id)}
                            >
                                <CardProduct {...product} />
                            </Col>
                        )
                    }
                </Row>
            </Container>

            <Footer />
        </div>
    );
})

export default Home;