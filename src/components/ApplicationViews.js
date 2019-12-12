import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home.js'
import KeepUp from './KeepUp.js'
import HomeDetail from './home/HomeDetail.js';
import Tickets from './Tickets/Tickets.js'
import TicketList from './Tickets/TicketList'






class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/keepUp" render={(props) => {
                    return <KeepUp />
                }} />
                <Route path="/homeDetail" render={(props) => {
                    return <HomeDetail {...props} />
                }} />
                <Route path="/tickets" render={(props) => {
                    return <TicketList />
                }} 
                />
            </React.Fragment>
        )
    }
}

export default ApplicationViews