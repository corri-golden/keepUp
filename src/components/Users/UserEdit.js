import React, { Component } from 'react'
import usersManager from '../modules/usersManager'
import { getUser } from '../modules/Helper.js';
import { Card, Form, Button } from 'react-bootstrap'
// import ticketManager from "../modules/ticketManager"
import carsManager from '../modules/carsManager.js';
// import maintenanceTypeManager from '../modules/maintenanceTypeManager.js';



class UserEdit extends Component {


    state = {
        users: [],
        userName: "",
        password: "",
        id: "",
        isAdmin: false,
    }

    handleFieldChange = evt => {  //sets the value as the user changes it
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingUser = evt => {  
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedUser = {
            userName: this.state.userName,
            isAdmin: false,
            password: this.state.password,
            id: this.state.id,
            // userId: getUser().id,
        };

        usersManager.update(editedUser)
            .then(() => this.props.history.push("/users"))
    }

    componentDidMount() {
        console.log(this.props)
        usersManager.getUsers(this.props.match.params.usersId)
            .then(user => {
                console.log("user", user)
                this.setState({
                    userName: user.userName,
                    loadingStatus: false,
                    // carId: ticket.carId,
                    // maintenanceTypeId: ticket.maintenanceTypeId,
                    password: user.password,
                    carId: user.carId,
                    id: user.id
                });
            });
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
        carsManager.getAll(this.props.match.params.cars)
            .then((cars) => {
                this.setState({
                    cars: cars
                })
            })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Card width="100%" className="shadow-lg p-3 mb-5 bg-white rounded">
                    <fieldset>
                        <Form.Group>
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.Control value={this.state.carId} as="select" id="carId" onChange={this.handleFieldChange}>
                                {this.state.cars.map(car => {
                                    return <option key={`select-option-${car.id}`} value={car.id}>{car.carMake} {car.carModel}</option>
                                })}
                            </Form.Control> */}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" id="userName" onChange={this.handleFieldChange} value={this.state.userName} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" id="password" onChange={this.handleFieldChange} value={this.state.password} />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="warning" disabled={this.state.loadingStatus} onClick={this.updateExistingUser}
                                size="lg" block className="mt-3">Update</Button>
                        </Form.Group>
                    </fieldset>
                </Card>
            </>
        );
    }


}

export default UserEdit