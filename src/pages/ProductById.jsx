

import React, { useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container, Button, Badge, Carousel, ListGroup, Stack } from "react-bootstrap";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Modal from "../components/ui/modal/Modal"
import { UseScreenSize } from "../hooks/UseScreenSize";
import { Context } from "../index";
import "../styles/ProductById.css"


const ProductById = observer(() => {


    const { products } = useContext(Context);
    const { user } = useContext(Context);

    const idCurrent = useParams();
    const [modal, SetModal] = useState(false);
    const [messageModal, SetMessageModal] = useState({ color: 'red', message: 'Choose the color and size of shoes' });
    const [index, setIndex] = useState(0);
    const [cartProduct, SetCartProduct] = useState({ idProduct: -1, color: '', size: '', count: 1 });
    const [filtersData, SetFilterData] = useState([]);

    const height = UseScreenSize() + 45;
    const product = products.products.find((item) => item.id === parseInt(idCurrent.id));

    //console.log(product);
    const DataFromFilter = (filterData) => {
        SetFilterData(filterData);
        //console.log(filterData);
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const AddToCart = () => {

        if (cartProduct.idProduct !== -1
            && cartProduct.size !== ''
            && cartProduct.color !== ''
            && cartProduct.count > 0)
        {
            SetMessageModal({ color: 'green', message: 'Item has add to cart' });
            let cartNew = { id: user.cart.length, productId: product.id, color: cartProduct.color, size: cartProduct.size, count: 1 };
            user.setCart(cartNew);
        }
        else {
            SetMessageModal({ color: 'red', message: 'Choose the color and size of shoes' });
        }
        SetModal(true);
    }

    const AddToFavorite = () => {

    }

    const ChoiceSize = (sizeChoise) => {
        SetCartProduct({ idProduct: product.id, size: sizeChoise, color: cartProduct.color, count: 1 });
    }

    const ChoiceColor = (colorChoice) => {
        SetCartProduct({ idProduct: product.id, size: cartProduct.size, color: colorChoice, count: 1 });
    }

    return (
        <div className="productbyId" style={{ minHeight: height }}>
            <Header callbackFilterData={DataFromFilter} />

            <Container className="carouselContainer">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {
                        product.img.map((img, index) =>
                            <Carousel.Item key={index}>
                                <img src={img}
                                    alt={img}
                                />

                                {
                                    (product.isNew) &&
                                    <Carousel.Caption className="captionNew">
                                        <h4>
                                            New
                                        </h4>
                                    </Carousel.Caption>
                                }
                                {
                                    (product.isBestSeller) &&
                                    <Carousel.Caption className="captionBest">
                                        <h4>
                                            The best selling
                                        </h4>
                                    </Carousel.Caption>
                                }
                            </Carousel.Item>)
                    }
                </Carousel>
            </Container>

            <Container className="itemData">
                <h4>{product.brand} - {product.name} </h4>
                <p style={{ color: 'gray' }}>{product.description}</p>

                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="borderNone mt-1">
                        <h5>color : </h5>
                        <Stack direction="horizontal">
                            {product.color.map(color =>
                                <span className="color"
                                    key={color}
                                    style={{ backgroundColor: color }}
                                    onClick={() => { ChoiceColor(color) }}
                                />
                            )}
                        </Stack>
                    </ListGroup.Item>

                    <ListGroup.Item className="borderNone mt-2">
                        <h5>size : </h5>
                        <Stack direction="horizontal">
                            {product.size.map(size =>
                                <span className="size"
                                    key={size}
                                    onClick={() => { ChoiceSize(size) }}
                                >
                                    <small>{size}</small>
                                </span>
                            )}
                        </Stack>
                    </ListGroup.Item>

                    <ListGroup.Item className='fw-bold borderNone'>
                        <h5>price : </h5>
                        <h4 className="text-danger fw-bold">{product.price} $</h4>
                    </ListGroup.Item>

                    <ListGroup.Item className='fw-bold borderNone'>
                        <h4>Only <Badge className="bg-success">{product.count}</Badge> pairs left</h4>
                    </ListGroup.Item>

                    {
                        (user.isAuth) &&
                        <ListGroup.Item className="buttonsAdd">
                            <Button className="favoriteBtn btn btn-info text-white rounded-pill"
                                onClick={AddToFavorite}
                            >
                                Add to favorit
                            </Button>
                            <Button className="cartBtn btn btn-info text-white rounded-pill"
                                onClick={AddToCart}
                            >
                                Add to cart
                            </Button>
                        </ListGroup.Item>
                    }
                </ListGroup>

            </Container>

            {/* Modal */}
            <Modal color={messageModal.color} visible={modal} SetVisible={SetModal}>
                {(modal) && <h5 className="text-white">{messageModal.message}</h5>}
            </Modal >

            <Footer />
        </div>
    );
})

export default ProductById;