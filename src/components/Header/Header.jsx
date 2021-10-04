import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
        <Navbar>
        <Container className="py-2">
          <Navbar.Brand className="fw-bold fs-1 border border-5 border-primary"><NavLink className="text-decoration-none" to="/">NP</NavLink></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="d-flex">
                <NavLink  className="text-decoration-none mx-4 text-uppercase nav-link" to="/">Home</NavLink>
                <NavLink className="text-decoration-none mx-4 text-uppercase nav-link" to="/services">Services</NavLink>
                <NavLink className="text-decoration-none mx-4 text-uppercase nav-link" to="/about">About Us</NavLink>
                <NavLink className="text-decoration-none mx-4 text-uppercase nav-link" to="/signup">Sing Up</NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
