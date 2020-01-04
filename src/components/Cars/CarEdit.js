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
            carId: Number(this.state.carId)
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
                    carId: car.id
                });
                console.log("heyyyyy", this.state)
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
                            <Form.Control value={this.state.carId} as="select" id="CarId" onChange={this.handleFieldChange}>
                                {this.state.cars.map(car => {
                                    return <option key={`select-option-${car.id}`} value={car.id}>{car.carMake} {car.carModel}</option>
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" id="userId" placeholder="User Id" onChange={this.handleFieldChange} value={this.state.userId} />
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Control type="text" id="password" onChange={this.handleFieldChange} value={this.state.password} />
                        </Form.Group> */}

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