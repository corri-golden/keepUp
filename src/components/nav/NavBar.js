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
                <NavBar.Brand href="#home" to="/keepUp">KeepUp</NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" to="/home">Tickets</Nav.Link>
                        {/* <Link className="nav-link" to="/articles">Articles</Link> */}
                    </Nav>
                    <Form inline>
                    </Form>
                </NavBar.Collapse>
            </NavBar>
        )

       //     <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
        //         <ul className="nav nav-pills nav-fill">
        //             <li className="nav-item">
        //                 <Link className="nav-link" to="/articles">Weekly Review</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to="/friends">KeepUp</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to="/messages">Tickets</Link>
        //             </li>
        //         </ul>
        //         <span className="navbar-text">
        //             <ul className="nav nav-pills nav-fill">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/register">Register</Link>
        //                 </li>
        //             </ul>
        //         </span>
        //     </nav>
        // )
    }
}

export default Navbar