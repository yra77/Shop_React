

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import FiltersSearch from "../helpers/FiltersSearch";
import { UseScreenSize } from "../hooks/UseScreenSize";
import { Context } from "../index";
import "../styles/About.css";


const About = () => {
    
    const height = UseScreenSize() + 45;
    const { products } = useContext(Context);
    const navigate = useNavigate();


    const DataFromFilter = (filtersData) => {
        const arr = FiltersSearch(products, filtersData);   
         products.setProductsFilter(arr);
         navigate('/products');
    }


    return (
        <div className="aboutPage" style={{ height: height }}>
            <Header callbackFilterData={DataFromFilter} />
            About
        <Footer/>
        </div>
    );
}

export default About;