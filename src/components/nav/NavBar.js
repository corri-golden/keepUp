import React, { Component } from "react"
import { Link } from "react-router-dom"
import NavBar from "react-bootstrap/NavBar"
import { Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"
// import './NavBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component {
    render() {
        return (
            <NavBar bg="light" expand="lg">
                <NavBar.Brand href="/" to="/home">KeepUp</NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/tickets" to="/tickets">Tickets</Nav.Link>
                        <Link className="nav-link" to="/register">Register</Link>
                        <Link className="nav-link" to="/">Login</Link>
                    </Nav>
                    <Form inline>
                    </Form>
                </NavBar.Collapse>
            </NavBar>
        )
    }
}

export default Navbar