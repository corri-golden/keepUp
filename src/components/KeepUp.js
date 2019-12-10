import React, { Component } from "react"
import Navbar from "./nav/NavBar.js"
import ApplicationViews from "./ApplicationViews"

// import "./KeepUp.css"

class KeepUp extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ApplicationViews />
      </>
    )
  }
}

export default KeepUp