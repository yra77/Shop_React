

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { Context } from "../../index";
import "./Brand.css";

import iconNike from "../../images/ic_nike.png";
import iconAdidas from "../../images/ic_adidas.png";
import iconNb from "../../images/ic_nb.png";
import iconPuma from "../../images/ic_puma.png";


const Brand = observer(() => {

    const navigate = useNavigate();
    const { products } = useContext(Context);
    const pathImg = [iconNike, iconAdidas, iconNb, iconPuma];

    const OnClickBrand = (name) => {
        let arr = products.products.filter(item => item.brand === name);
        products.setProductsFilter(arr);
        navigate('/products');
    }


    return (
        <Container className="underHeader">
            {
                products.brands.map((brand, i) =>
                    <img key={brand.name}
                        src={pathImg[i]}
                        alt={brand.name}
                        onClick={() => { OnClickBrand(brand.name) }}
                    />)
            }
        </Container>
    );
})

export default Brand;