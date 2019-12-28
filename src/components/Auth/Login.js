import React, { Component } from "react"
import usersManager from "../modules/usersManager"
import { Form, Input, Button } from "react-bootstrap"





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
        let login = false
        usersArray.map(user => {
          if (user.email === this.state.email && user.password === this.state.password) {
            this.props.setUser({
              id: user.id,
              email: this.state.email,
              password: this.state.password
            })
            login = true
            this.props.history.push("/")
          }
        })
        if (login === false) {
          window.alert("Register Son")
          this.props.history.push("register")
        }
      })
  }

  render() {
    return (
        <div className="mt-5" onSubmit={this.handleReg}>
          <center><h1>KeepUp</h1></center>
          <form>
            <Form.Group>
              <Form.Control className="formgrid" onSubmit={this.handleLogin} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
            </Form.Group>
                <Form.Group>
                  <Form.Control onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
              </Form.Group>
                <Button className="center" variant="warning" type="submit" block>Sign in
              </Button>
          </form>
        </div>
          )
        }
      
      }
      
export default Login