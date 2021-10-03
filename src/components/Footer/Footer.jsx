import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="bg-dark pt-5">
            <Container>
                <Row>
                    <Col className="col-12 col-md-4 bg-light  p-5 ">
                        <h1>NP</h1>
                        <p className="text-muted fs-5 my-3">We are the best and biggest social network with 5 billion active users.</p>
                    </Col>
                    <Col className="col-12 col-md-8">
                        <Row className="text-white my-5 border-3 border-bottom border-white">
                            <Col className="text-center">
                                <h3>Useful Links</h3>
                                <p className="mt-5"><Link className="text-decoration-none text-muted ">HOME</Link></p>
                                <p><Link className="text-decoration-none text-muted">ABOUT</Link></p>
                                <p><Link className="text-decoration-none text-muted">FAQ</Link></p>
                                <p><Link className="text-decoration-none text-muted">CONTACT</Link></p>
                            </Col>
                            <Col className="text-center">
                                <h3>Community</h3>
                                <p className="mt-5"><Link className="text-decoration-none text-muted ">Members</Link></p>
                                <p><Link className="text-decoration-none text-muted">Groups</Link></p>
                                <p><Link className="text-decoration-none text-muted">Froms</Link></p>
                                <p><Link className="text-decoration-none text-muted">Users</Link></p>
                                <p><Link className="text-decoration-none text-muted">Community</Link></p>
                            </Col>
                            <Col className="text-center">
                                <h3>Profile</h3>
                                <p className="mt-5"><Link className="text-decoration-none text-muted ">Activity</Link></p>
                                <p><Link className="text-decoration-none text-muted">Profile</Link></p>
                                <p><Link className="text-decoration-none text-muted">Friends</Link></p>
                                <p><Link className="text-decoration-none text-muted">Media</Link></p>
                                <p><Link className="text-decoration-none text-muted">Badges</Link></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Col>
                           <p className="text-muted text-center mb-5 fs-4"> © 2021 Copyright. All rights reserved</p>
                            </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
