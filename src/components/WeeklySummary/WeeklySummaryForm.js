import React, { Component } from 'react'
import { getUser } from '../modules/Helper.js';
import { Card, Form, Button } from 'react-bootstrap'
import weeklySummaryManager from '../modules/weeklySummaryManager'
import ticketManager from '../modules/ticketManager'
import maintenanceTypeManager from '../modules/maintenanceTypeManager'
import carsManager from '../modules/carsManager'
import userManager from '../modules/usersManager'




class WeeklySummaryForm extends Component {

    state = {
        weeklySummaries: [],
        recommendations: "",
        cars: [],
        mileage: "",
        tickets: [],
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewSummary = evt => {
        evt.preventDefault();
        if (this.state.recommendations === "") {
            window.alert("Fill Out a Recommendations");
        } else if (Number(this.state.mileage) === 0) {
            window.alert("Add Mileage");
        } else {
            this.setState({ loadingStatus: true });
            const weeklySummary = {
                recommendations: this.state.recommendations,
                date: this.state.date,
                carId: Number(this.state.carId),
                userId: getUser().id,
                mileage: this.state.mileage
            };
            // Create the message and redirect user to ticket 
            weeklySummaryManager.post(weeklySummary)
                .then(() => this.props.history.push("/weeklySummaries"))
                console.log("yop", weeklySummary)
        }
    };

    componentDidMount() {
        console.log(this.props.match.params.maintenanceTypeId)
        ticketManager.getAllUserTickets(getUser().id)
            .then(tickets => {
                this.setState({ tickets: tickets })
            })
        carsManager.getAllUserCars(getUser().id)
            .then(cars => {
                console.log("carsManager", carsManager)
                this.setState({ cars: cars })
            })
        weeklySummaryManager.getAllUserWeeklySummary(getUser().id)
            .then(weeklySummaries => {
                console.log("yop", weeklySummaryManager)
                this.setState({weeklySummaries: weeklySummaries})
            })
    }



    render() {
        console.log(this.state)
        return (
            <>
                <Card width="100%" className="shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Header><h1>Weekly Summary</h1></Card.Header>
                    <Form.Group>
                        <Form.Control as="select" id="carId" onChange={this.handleFieldChange}>
                    <option value="0"> Select A Car</option>
                        {this.state.cars.map(car => (
                            <option key={`select-option-${car.id}`} value={car.id}>{car.carMake} {car.carModel}</option>
                        ))}
                    </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <h4>Mileage</h4>
                        <Form.Control type="text" id="mileage" onChange={this.handleFieldChange} />
                    </Form.Group>
                    <Form.Group>
                        <h4>Date</h4>
                        <Form.Control type="date" id="date" onChange={this.handleFieldChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><h4>Recommendations</h4></Form.Label>
                        <Form.Control as="textarea" rows="3" type="textarea" required onChange={this.handleFieldChange} name="text" id="recommendations" />
                    </Form.Group>
                    <Button variant="warning" disabled={this.state.loadingStatus} onClick={this.constructNewSummary}>Submit</Button>
                </Card>
            </>
        )
    }

}

export default WeeklySummaryForm