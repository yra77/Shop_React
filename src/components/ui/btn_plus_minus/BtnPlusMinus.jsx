

import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import "./BtnPlusMinus.css";

import iconPlus from "../../../images/plus_icon.png";
import iconMinus from "../../../images/minus_icon.png";


const BtnPlusMinus = ({ maxCountItem: maxCountItem, item:cart }) => {

    const [count, SetCount] = useState(1);

    const ClickMinus = () => {
        if (count > 1) {
            SetCount(count - 1);
            cart.count--;
        }
    }

    const ClickPlus = () => {
        if (count < maxCountItem) {
            SetCount(count + 1);
            cart.count++;
        } 
    }

    return (
        <Stack direction="horizontal" className="btnplusminus">
            <img onClick={ClickMinus} src={iconMinus} alt="icon minus" />
            <h4>{count}</h4>
            <img onClick={ClickPlus} src={iconPlus} alt="icon plus" />
        </Stack>
    );
}

export default BtnPlusMinus;