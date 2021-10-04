import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card, Container, Form } from 'react-bootstrap'

export const Signup = () => {
    return (
        <div className="bg-light">
            <Container className="py-5">
            <Card className="w-75 mx-auto">
                <Card.Body>
                    <Card.Title>Sign Up This From</Card.Title>
                    <Form className="my-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Type Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Type Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className="btn btn-warning w-100" type="submit">
                           Register
                        </Button>
                    </Form>
                </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
