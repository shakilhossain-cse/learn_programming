import React from 'react'
import { Card, Col } from 'react-bootstrap'

export const Teacher = (props) => {
    const {name,email,image} = props.teacher
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={image} style={{height:'10rem'}} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {email}
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    )
}
