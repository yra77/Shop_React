

import React, {memo} from "react";
import { Link } from "react-router-dom";
import { ListGroup, Card, Stack } from "react-bootstrap";
import "./CardProduct.css";


const CardProduct = (props) => {

  return (
    <Card className="shadow cardProduct">

      <Card.Img variant="top" src={props.img[0]} />

      <Card.Body className="body">

        <Card.Subtitle className="text-info subtitle">
          <Stack direction="horizontal">
            <small>{(props.isNew) && 'New'}</small>
            <small className="ml">{(props.isBestSeller) && 'Best'}</small>
          </Stack>
        </Card.Subtitle>

        <Card.Subtitle className="subtitle" >{props.brand} - {props.name}</Card.Subtitle>
        <Card.Text className="text-truncate">{props.description}</Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">

        <ListGroup.Item className="borderNone">
          <Stack direction="horizontal">
            {props.color.map(color =>
              <span className="color" key={color} style={{ backgroundColor: color }} />
            )}
          </Stack>
        </ListGroup.Item>

        <ListGroup.Item className="borderNone">
          <Stack direction="horizontal">
            {props.size.map(size =>
              <small key={size}>{size}</small>
            )}
          </Stack>
        </ListGroup.Item>

        <ListGroup.Item className='fw-bold'>
          {props.price} $
        </ListGroup.Item>
      </ListGroup>

    </Card>
  );
}

export default memo(CardProduct);