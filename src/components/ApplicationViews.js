import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home.js'
import KeepUp from './KeepUp.js'
import HomeDetail from './home/HomeDetail.js';
import Tickets from './Tickets/Tickets.js'
import TicketList from './Tickets/TicketList'
import HomeDetailEdit from './home/HomeDetailEdit'
import Login from './Auth/Login.js'
import Reg from './Auth/Reg.js'








class ApplicationViews extends Component {   //adding /1 extension to pass it to the props to home detail.  change homedetail route.

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {  //i'm not using the keepUp.  It is home.
        return (
            <React.Fragment>
                <Route path= "/login" render = {props =>{
                    return <Login setUser={this.props.setUser}{...props}/>
                }}/>
                <Route
                exact path="/register" render={props => {
                return <Reg setUser={this.props.setUser} {...props} />
                }}
                />
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Home {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/keepUp" render={(props) => {
                    return <KeepUp />
                    }} /> 
                <Route path="/homeDetail/:maintenanceTypeId(\d+)" render={(props) => {
                    return <HomeDetail {...props} />
                }} />
                <Route exact path="/tickets" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <TicketList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
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