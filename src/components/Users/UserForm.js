import React, { Component } from 'react'
import usersManager from '../modules/usersManager'
import { Form, Button } from 'react-bootstrap'




class UserForm extends Component {

    state = {
        users: [],
        userName: "",
        password: "",
        id: "",
        isAdmin: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewUser = evt => {
        evt.preventDefault();
        if (this.state.userName === "") {
            window.alert("Fill Out a Recommendations");
            // } else if (Number(this.state.id) === 0) {
            //     window.alert("Add UserId");
        } else {
            this.setState({ loadingStatus: true });
            const user = {
                userName: this.state.userName,
                isAdmin: false,
                password: this.state.password,
                id: Number(this.state.userId),
                // userId: getUser().id,
            };
            // Create the message and redirect user to ticket 
            usersManager.post(user)
                .then(() => this.props.history.push("/users"))
            console.log("yop", user)
        }
    };


    componentDidMount() {
        usersManager.getAllUsers()
            .then(users => {
                console.log(users)
                this.setState({ users: users })
            }
            )
    }
    render() {
        return (
            <form>
                <Form.Group>
                    <Form.Control className="mt-3" onChange={this.handleFieldChange} type="userName"
                        id="userName"
                        placeholder="User Name"
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
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check value="false" type="checkbox" label="Administrator" />
                    
                </Form.Group>
                <Button className="center" type="submit" variant="warning" disabled={this.state.loadingStatus} onClick={this.constructNewUser} block>Create New Account
                </Button>
            </form>
        )
    }

}


export default UserForm