import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import NavBar from "react-bootstrap/NavBar"
import Badge from '@material-ui/core/Badge'
import { Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"
// import './NavBar.css'
import ticketManager from '../modules/ticketManager.js'
import { getUser } from "../modules/Helper"

import 'bootstrap/dist/css/bootstrap.min.css';

import './NavBar.css'

class Navbar extends Component {  //withrouter allows to have access to history and props.

    state = {
        badgeNotif: 0
    }

    componentDidMount() {
        if (getUser().isAdmin === true) {
            ticketManager.getAll(getUser().id)
            .then(ticketsArray => {
                console.log("yo yo", ticketsArray)
                this.setState({
                    badgeNotif: ticketsArray.length
                })
            })
        }
     }




    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push("/login");
    }

    render() {
        return (
            <NavBar bg="light" expand="lg">
                <Badge className="icon" color="secondary" badgeContent={this.state.badgeNotif} >

                    <NavBar.Brand href="/" to="/home">KeepUp</NavBar.Brand>

                </Badge>

                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/tickets" to="/tickets">Tickets</Nav.Link>
                        <Nav.Link href="/weeklySummaries" to="/weeklySummaries">Weekly Summary</Nav.Link>
                        {(getUser().isAdmin === true) 
                        ?
                        <>
                        <Nav.Link href="/users" to="/users">Users</Nav.Link>
                        <Nav.Link href="/cars" to="/cars">Cars</Nav.Link>
                        </>
                        :
                        <></>
                        }
                        
                        {(this.props.isAuthenticated())
                            ?
                            <Link onClick={this.handleLogout} className="nav-link" to="/login">Logout</Link>
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