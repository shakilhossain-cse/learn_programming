import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

export const Banner = () => {
    return (
        <div className="bg-primary">
            <Container>
                <Row className="py-5">
                    <Col className="d-flex justify-content-center align-items-center col-12 col-md-6 w-sm-100">
                        <div>
                            <p className="text-uppercase text-warning">TRIPPLES COMMUNITY</p>
                            <h1 className="text-white display-2">Welcome to Our Community</h1>
                            <p className="text-white fs-4">We are the best and biggest social network with 5 billion active users all around the world.</p>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 my-5 ">
                        <Card className=" p-5  rounded">
                        <Card.Body>
                            <Card.Text className="mb-4">Login into your account</Card.Text>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-5"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password"
                                className="mb-5" />
                            </FloatingLabel> 
                            <Button className="w-100 btn btn-warning text-white mb-4">Log in</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
