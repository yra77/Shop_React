

import React, {memo} from "react";
import { Container, Stack } from "react-bootstrap";
import "./Footer.css";


const Footer = () => {

    return (
             <Stack className="footer" direction="horizontal" gap={2}>
                <small>All right reserved  : </small>
                <small> aaa@aa.aa</small>
             </Stack>
    );
}

export default memo(Footer);