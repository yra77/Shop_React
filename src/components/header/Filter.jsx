

import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container, Button, CloseButton, ToggleButtonGroup, ToggleButton, Stack } from "react-bootstrap";

import RangeSlider from "../ui/sliders/rangeSlider/RangeSlider";
import { Context } from "../../index";


const Filter = ({ callback }) => {

    const { products } = useContext(Context);
   // const [filtersData, SetFiltersData] = useState({ genders: [], brands: [], sizes: [], price: { min: '', max: '' } });
    let filtersData = {};
    const [genders, SetGenders] = useState(new Array());
    const [brands, SetBrands] = useState(new Array());
    const [sizes, SetSizes] = useState(new Array());
    let prices = { min: '', max: '' };

    const PriceChange = (minPrice, maxPrice) => {
        prices = { min: minPrice, max: maxPrice };
    }

    const GenderChange = (name) => {

        if(genders.indexOf(name) === -1)
        {
            let gen = genders;
            gen.push(name);
            SetGenders(gen);
        }
        else {
            //console.log(genders);
            let gen = genders.filter(item => item !== name);
            SetGenders(gen);
        }
       // console.log(genders);
    }

    const BrandChange = (name) => {
       
        if(brands.indexOf(name) === -1)
        {
            let gen = brands;
            gen.push(name);
            SetBrands(gen);
        }
        else {
            //console.log(brands);
            let gen = brands.filter(item => item !== name);
            SetBrands(gen);
        }
    }

    const SizeChange = (name) => {
        
        if(sizes.indexOf(name) === -1)
        {
            let gen = sizes;
            gen.push(name);
            SetSizes(gen);
        }
        else {
            //console.log(brands);
            let gen = sizes.filter(item => item !== name);
            SetSizes(gen);
        }
    }

    const SendToHeader = () => {
        
        filtersData.genders = genders;
        filtersData.brands = brands;
        filtersData.sizes = sizes;
        filtersData.price = { min: prices.min, max: prices.max };
        callback(filtersData);
    }

    return (
        <Container className="filter">

            <Stack direction="horizontal" gap={2}>
                <h6>FILTER...</h6>
                <CloseButton className="shadow-none ms-auto"
                    onClick={() => { callback(filtersData) }} />
            </Stack>

            <small>Gender :</small>
            <ToggleButtonGroup type="checkbox" name="gender">
                {
                    products.genders.map(gender =>
                        <ToggleButton variant="outline-info btn"
                            className="filterBtn1"
                            key={gender.name}
                            id={gender.name}
                            value={gender.name}
                            onClick={()=>{GenderChange(gender.name)}}
                        >
                            {gender.name}
                        </ToggleButton>)
                }
            </ToggleButtonGroup>

            <small>Brands :</small>
            <ToggleButtonGroup type="checkbox" name="brand">
                {
                    products.brands.map(brand =>
                        <ToggleButton variant="outline-info btn"
                            className="filterBtn1"
                            key={brand.name}
                            id={brand.name}
                            value={brand.name}
                            onClick={() => { BrandChange(brand.name) }}
                        >
                            {brand.name}
                        </ToggleButton>)
                }
            </ToggleButtonGroup>

            <small>Sizes :</small>
            <ToggleButtonGroup type="checkbox" className="filterBtnGroupe" name="size">
                {
                    products.sizes.map(size =>
                        <ToggleButton variant="outline-info btn rounded"
                            className="filterBtn2"
                            key={size.size}
                            id={size.size}
                            value={size.size}
                            onClick={() => { SizeChange(size.size) }}
                        >
                            {size.size}
                        </ToggleButton>)
                }
            </ToggleButtonGroup>

            <small>Price range :</small>
            <RangeSlider min={0} max={600} callback={PriceChange} />

            <Button variant="info btn rounded" onClick={SendToHeader}>Ok</Button>

        </Container >
    );
}

export default Filter;