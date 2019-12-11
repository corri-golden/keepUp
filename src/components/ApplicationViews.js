import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home.js'
import KeepUp from './KeepUp.js'
import HomeDetail from './home/HomeDetail.js';





class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/tickets" render={(props) => {
          return <KeepUp />
        }} />
        <Route path="/homeDetail" render={(props) => {
          return <HomeDetail />
        }} />
    </React.Fragment>
    )
  }
}

export default ApplicationViews