import React, { Component } from "react"
import usersManager from "../modules/usersManager"





class Login extends Component {


  state = {
    email: "",
    password: ""
  }
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  
  handleLogin = (e) => {
    e.preventDefault()
    usersManager.getAllUsers()
      .then(usersArray => {
        usersArray.map(user => {
          if(user.userName === this.state.userName && user.password === this.state.password){
            this.props.setUser({
              id: user.id,
              userName: this.state.userName,
              password: this.state.password
            })
            this.props.history.push("/")
          }
        })
      })
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
          <h3>Please sign in</h3>
          <div className="formgrid">
            <input onChange={this.handleFieldChange} type="email"
              id="email"
              placeholder="Email address"
              required="" autoFocus="" />
            <label htmlFor="inputEmail">Email address</label>
            <input onChange={this.handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <button type="submit">Sign in
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Login