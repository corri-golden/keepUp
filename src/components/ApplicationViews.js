import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import KeepUp from './KeepUp'





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
        
      </React.Fragment>
    )
  }
}

export default ApplicationViews