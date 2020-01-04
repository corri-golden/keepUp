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
import WeeklySummaryList from './WeeklySummary/WeeklySummaryList.js';
import WeeklySummaryForm from './WeeklySummary/WeeklySummaryForm.js'
import WeeklySummaryEdit from './WeeklySummary/WeeklySummaryEdit.js'
import UserForm from './Users/UserForm.js'
import UserList from './Users/UserList.js'











class ApplicationViews extends Component {   //adding /1 extension to pass it to the props to home detail.  change homedetail route.

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {  //i'm not using the keepUp.  It is home.
        return (
            <React.Fragment>
                <Route path="/login" render={props => {
                    return <Login setUser={this.props.setUser}{...props} />
                }} />
                
                <Route
                    exact path="/register" render={props => {
                        return <Reg setUser={this.props.setUser} {...props} />
                    }} />
                
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
                
                <Route exact path="/weeklySummaries" render={props => {
                    if (this.isAuthenticated()) {
                        return <WeeklySummaryList {...props} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />
                
                <Route exact path="/weeklySummaries/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <WeeklySummaryForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                
                <Route
                    path="/weeklySummaries/:weeklySummariesId(\d+)/edit" render={props => {
                        return <WeeklySummaryEdit {...props} />
                    }} />
                
                <Route
                    path="/tickets/:ticketsId(\d+)/edit" render={props => {
                        return <HomeDetailEdit {...props} />
                    }}
                />
                <Route
                    path="/userForm" render={props => {
                        return <UserForm {...props} />
                    }}
                />
                <Route exact path="/users" render={props => {
                    if (this.isAuthenticated()) {
                        return <UserList {...props} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />

            </React.Fragment>
        )
    }
}

export default ApplicationViews