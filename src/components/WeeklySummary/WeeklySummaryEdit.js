import React, { Component } from 'react'
import weeklySummaryManager from '../modules/weeklySummaryManager'
import { getUser } from '../modules/Helper.js';
import { Card, Form, Button } from 'react-bootstrap'
import ticketManager from "../modules/ticketManager"
import carsManager from '../modules/carsManager.js';
import maintenanceTypeManager from '../modules/maintenanceTypeManager.js';



class WeeklySummaryEdit extends Component {


    state = {
        loadingStatus: true,
        cars: [],
        weeklySummary: [],
        date: "",
        userId: [],
        recommendations: "",
        mileage: "",
    }

    handleFieldChange = evt => {  //sets the value as the user changes it
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingWeeklySummary = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedWeeklySummary = {
            recommendations: this.state.recommendations,
            id: this.props.match.params.weeklySummariesId,
            carId: Number(this.state.carId),
            date: this.state.date,
            userId: getUser().id,
            mileage: this.state.mileage
        };

        weeklySummaryManager.update(editedWeeklySummary)
            .then(() => this.props.history.push("/weeklySummaries"))
    }

    componentDidMount() {
        console.log(this.props)
        weeklySummaryManager.get(this.props.match.params.weeklySummariesId)
            .then(weeklySummary => {
                console.log("weeklySummary", weeklySummary)
                this.setState({
                    recommendations: weeklySummary.recommendations,
                    loadingStatus: false,
                    // carId: ticket.carId,
                    // maintenanceTypeId: ticket.maintenanceTypeId,
                    date: weeklySummary.date,
                    mileage: weeklySummary.mileage,
                    carId: weeklySummary.carId
                });
            });
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
        carsManager.getAllUserCars(getUser().id)
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
                            <Form.Control value={this.state.carId} as="select" id="carId" onChange={this.handleFieldChange}>
                                {this.state.cars.map(car => {
                                    return <option key={`select-option-${car.id}`} value={car.id}>{car.carMake} {car.carModel}</option>
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" id="date" onChange={this.handleFieldChange} value={this.state.date} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" id="mileage" onChange={this.handleFieldChange} value={this.state.mileage} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="textarea" rows="3" className="form-control" onChange={this.handleFieldChange} id="recommendations" value={this.state.recommendations} />
                            <label htmlFor="Recommendations"></label>

                            <Button variant="warning" disabled={this.state.loadingStatus} onClick={this.updateExistingWeeklySummary}
                                size="lg" block className="mt-3">Submit</Button>
                        </Form.Group>
                    </fieldset>
                </Card>
            </>
        );
    }


}

export default WeeklySummaryEdit