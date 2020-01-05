import React, { Component } from 'react'
import usersManager from '../modules/usersManager'
import { getUser } from '../modules/Helper.js';
import { Card, Form, Button } from 'react-bootstrap'
// import ticketManager from "../modules/ticketManager"
import carsManager from '../modules/carsManager.js';
// import maintenanceTypeManager from '../modules/maintenanceTypeManager.js';



class CarEdit extends Component {


    state = {
        cars: [],
        carMake: "",
        carModel: "",
        userId: "",
        users: [],
        carId: "",
    }

    handleFieldChange = evt => {  //sets the value as the user changes it
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingCar = evt => {  
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedCar = {
            userId: this.state.userId,
            carMake: this.state.carMake,
            carModel: this.state.carModel,
            // userId: getUser().id,
            id: this.state.id
        };

        carsManager.update(editedCar)
            .then(() => this.props.history.push("/cars"))
    }

    componentDidMount() {
        console.log(this.props)
        carsManager.get(this.props.match.params.carsId)
            .then(car => {
                console.log("car", car)
                this.setState({
                    userId: car.userId,
                    loadingStatus: false,
                    // carId: ticket.carId,
                    // maintenanceTypeId: ticket.maintenanceTypeId,
                    carMake: car.carMake,
                    carModel: car.carModel,
                    id: car.id
                });
                console.log("heyyyyy", this.state)
            });
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
        carsManager.getAll(this.props.match.params.cars)
            .then((cars) => {
                this.setState({
                    cars: cars
                })
            }); usersManager.getAllUsers()
            .then(users => {
                console.log("user", users)
                this.setState({ users: users })
            }
            )
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
                            <Form.Control type="text" id="carMake" onChange={this.handleFieldChange} value={this.state.carMake} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" id="carModel" onChange={this.handleFieldChange} value={this.state.carModel} />
                        </Form.Group>
                       
                        
                        <Form.Group>
                            <Form.Control value={this.state.userId} as="select" id="userId" onChange={this.handleFieldChange}>
                                {this.state.users.map(user => {
                                    return <option key={`select-option-${user.id}`} value={user.id}>{user.userName}</option>
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="warning" disabled={this.state.loadingStatus} onClick={this.updateExistingCar}
                                size="lg" block className="mt-3">Update</Button>
                        </Form.Group>
                    </fieldset>
                </Card>
            </>
        );
    }


}

export default CarEdit