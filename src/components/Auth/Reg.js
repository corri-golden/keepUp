import React, { Component } from "react"
import Home from "../home/Home.js"
import usersManager from "../modules/usersManager"
import './Reg.css'
import { Card, Form, Button } from "react-bootstrap"


class Reg extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
    confirmPass: "",
    loadingStatus: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  constructNewUser = evt => {    //create a new user
    evt.preventDefault();
    if (this.state.email === "" || this.state.password === "" || this.state.confirmPass !== this.state.password) {
      window.alert("oh no");
    } else {
      this.setState({ loadingStatus: true });
      const user = {
        email: this.state.email,
        password: this.state.password,


      };
      usersManager.post(user)
        .then(() => this.props.history.push("/"))
    }
  }

  handleReg = (e) => {
    e.preventDefault()
    this.props.newUser({
      email: this.state.email,
      password: this.state.password
    })
    this.props.history.push("/");

  }

  render() {
    return (
      <>
        {/* <Form className="mt-5">
          <Form.Group controlId="formGroupEmail">
            <center sz="lg"><h1>KeepUp</h1></center>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form> */}





        <div className="mt-5" onSubmit={this.handleReg}>
          <center><h1>KeepUp</h1></center>
          <form>
            <Form.Group>
            <Form.Control className="mt-3" onChange={this.handleFieldChange} type="email"
              id="email"
              placeholder="Email address"
              required="" autoFocus="" />
            
            </Form.Group>
            <Form.Group>
            <Form.Control className="mt-0" onChange={this.handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
           
            </Form.Group>
            <Form.Group>
            <Form.Control onChange={this.handleFieldChange} type="password"
              id="confirmPass"
              placeholder="Confirm Password"
              required="" />
            <label htmlFor="inputPassword"></label>
            </Form.Group>
            <Button className="center" type="submit" variant="warning" disabled={this.state.loadingStatus} onClick={this.constructNewUser} block>Create New Account
            </Button>
          </form>
        </div>
      </>
    )
  }

}

export default Reg