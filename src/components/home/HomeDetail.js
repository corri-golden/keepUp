import React, { Component } from 'react';
import { Button, Input, Form, Label, FormText } from 'react-bootstrap';
import maintenanceTypeManager from '../modules/maintenanceTypeManager.js'
import ticketManager from '../modules/ticketManager.js'
import carsManager from '../modules/carsManager.js';




class HomeDetail extends Component {

    // state = {
    //     maintenanceType: "",
    //     loadingStatus: true,
    // }

    // componentDidMount(){
    //     console.log(this.props.maintenanceType)
    // maintenanceTypeManager.get(this.props.maintenanceType)
    //     .then((maintenanceType) => {
    //         this.setState({
    //             maintenanceType: maintenanceType.id,
    //             loadingStatus: false
    //         });
    //     });
    // }

    state = {
        tickets: [],
        cars: [],
        timeStamp: "",
        carId: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewTicket = evt => {
        evt.preventDefault();
        if (this.state.ticket === "") {
            window.alert("Fill Out a Message");
        } else {
            this.setState({ loadingStatus: true });
            const ticket = {
                message: this.state.message,
                timeStamp: new Date(),
                carId: Number(this.state.carId)
            };
            // Create the message and redirect user to ticket 
            ticketManager.post(ticket)
                .then(() => this.props.history.push("/tickets"))
        }
    };

    componentDidMount() {
        ticketManager.getAll()
            .then(tickets => {
                this.setState({ tickets: tickets })
            })

            carsManager.getAll()
            .then(cars => {
                this.setState({ cars: cars })
            })
    }


    // componentDidMount() {
    //     ticketManager.getAll()
    //     .then(messages => {
    //         console.log(messages)
    //         this.setState({messages: messages})
    //     }
    //     )}












    render() {
        console.log(this.state)
        return (
                <>
                <Form>
                <Form.Group>
                    <Form.Control type="text" name="text" id="issue" placeholder="Maintenance Issue" />
                </Form.Group>
                    <Form.Group className="col-md-12 form-group form-inline">
                        <Form.Label className="col-sm-2 col-form-label">Select Car</Form.Label>
                        <Form.Control as="select" id="carId" onChange={this.handleFieldChange}>
                            {this.state.cars.map(car => (
                                <option key={`select-option-${car.id}`} value={car.id}>{car.carMake} {car.carModel}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control type="textarea" required onChange={this.handleFieldChange} name="text" id="message" />
                </Form.Group>
                </Form>
                <Button color="secondary" disabled={this.state.loadingStatus} onClick={this.constructNewTicket}>Submit</Button>
                </>
           )
    }
}






export default HomeDetail;











