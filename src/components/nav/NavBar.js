import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import NavBar from "react-bootstrap/NavBar"
import { Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"
// import './NavBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends Component {  //withrouter allows to have access to history and props.

    handleLogout= () => {
        this.props.clearUser();
        this.props.history.push("/login");
    }

    render() {
        return (
            <NavBar bg="light" expand="lg">
                <NavBar.Brand href="/" to="/home">KeepUp</NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/tickets" to="/tickets">Tickets</Nav.Link>
                        <Nav.Link href="/weeklySummaryList" to="/weeklySummaryList">Weekly Summary</Nav.Link>
                        {(this.props.isAuthenticated())
                        ?
                        <Link onClick={this.handleLogout}   className="nav-link" to="/login">Logout</Link>
                        :
                        <>
                            <Link className="nav-link" to="/register">Register</Link>
                            <Link className="nav-link" to="/">Login</Link>
                        </>
                        }    
                    </Nav>
                    <Form inline>
                    </Form>
                </NavBar.Collapse>
            </NavBar>
        )
    }
}

export default withRouter(Navbar)