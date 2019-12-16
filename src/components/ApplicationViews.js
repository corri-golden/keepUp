import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home.js'
import KeepUp from './KeepUp.js'
import HomeDetail from './home/HomeDetail.js';
import Tickets from './Tickets/Tickets.js'
import TicketList from './Tickets/TicketList'
import HomeDetailEdit from './home/HomeDetailEdit'
// import Login from './Auth/Login.js';








class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {  //i'm not using the keepUp.  It is home.
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                /* <Route path="/keepUp" render={(props) => {
                    return <KeepUp />
                }} /> */
                <Route path="/homeDetail" render={(props) => {
                    return <HomeDetail {...props} />
                }} />
                <Route path="/tickets" render={(props) => {
                    return <Tickets />
                }} />
                <Route
                    path="/tickets/:ticketsId(\d+)/edit" render={props => {
                        return <HomeDetailEdit {...props} />
                    }}
                />
            </React.Fragment>
        )
    }
}

export default ApplicationViews