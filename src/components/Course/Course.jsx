import { Card, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import React from 'react'

export const Course = (props) => {
    const {name,price,image,rating} = props.course;
    return (
        <Col>
            <Card className="bg-dark" style={{height:'15rem'}}>
                <Card.Img src={image} alt="Card image" className="h-100 bg-dark opacity-25" />
                <Card.ImgOverlay className="text-white">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price : ${price}</Card.Text>
                    <Card.Text>Rating : {rating}</Card.Text>
                    <Button className="btn btn-warning">Enroll Now</Button>
                </Card.ImgOverlay>
            </Card>
        </Col>
    )
}
