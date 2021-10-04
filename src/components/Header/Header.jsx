import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand className="fw-bold fs-1 border border-5 border-primary"><NavLink className="text-decoration-none" to="/">NP</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavLink  className="text-decoration-none mx-4 text-uppercase nav-link" to="/">Home</NavLink>
                    <NavLink className="text-decoration-none mx-4 text-uppercase nav-link" to="/services">Services</NavLink>
                    <NavLink className="text-decoration-none mx-4 text-uppercase nav-link" to="/about">About Us</NavLink>
                    <NavLink className="text-decoration-none mx-4 text-uppercase nav-link" to="/signup">Sing Up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}

