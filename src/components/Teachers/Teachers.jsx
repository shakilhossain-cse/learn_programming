import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export const Teachers = () => {
    return (
        <div className="my-5">
            <Container>
            <h1 className="my-4">Top Teachers</h1>
            <Row xs={1} sm={2} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
            </Container>
           
        </div>
    )
}
