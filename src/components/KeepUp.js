import React, { Component } from "react"
import Navbar from "./nav/NavBar.js"
import ApplicationViews from "./ApplicationViews"


class KeepUp extends Component {
  state = {
    user: false,
  }
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    localStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }
  clearUser = () => {
    localStorage.removeItem("credentials")
    this.setState({ user: this.isAuthenticated() })
  }
  componentDidMount() {
    this.setState({
      user:this.isAuthenticated()
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} clearUser={this.clearUser}{...this.props} />
        <ApplicationViews user={this.state.user}
          setUser={this.setUser}
          isAuthenticated = {this.isAuthenticated }/>
      </React.Fragment>
      );
    }
  }
  
  
  
export default KeepUp