import React, { Component } from 'react';
import { Button, Input, Form, Label, FormText, Card } from 'react-bootstrap';
import maintenanceTypeManager from '../modules/maintenanceTypeManager.js'
import ticketManager from '../modules/ticketManager.js'
import carsManager from '../modules/carsManager.js';
import { getUser } from '../modules/Helper.js';





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
        users: [],
        cars: [],
        carId: "0",
        timeStamp: "",
        maintenanceType: "",
        message: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewTicket = evt => {
        evt.preventDefault();
        if (this.state.message === "") {
            window.alert("Fill Out a Message");
        }  else if (Number(this.state.carId) === 0) {
            window.alert("Select a Car");
        } else {
            this.setState({ loadingStatus: true });
            const ticket = {
                message: this.state.message,
                timeStamp: new Date(),
                carId: Number(this.state.carId),
                maintenanceTypeId: this.state.maintenanceType.id,
                userId: getUser().id
            };
            // Create the message and redirect user to ticket 
            ticketManager.post(ticket)
                .then(() => this.props.history.push("/tickets"))
        }
    };

    componentDidMount() {
        console.log(this.props.match.params.maintenanceTypeId)
        ticketManager.getAllUserTickets(getUser().id)
            .then(tickets => {
                this.setState({ tickets: tickets })
            })
        maintenanceTypeManager.get(this.props.match.params.maintenanceTypeId)
            .then(maintenanceType => {
                this.setState({ maintenanceType: maintenanceType})
            })

        carsManager.getAllUserCars(getUser().id)
            .then(cars => {
                console.log("carsManager", carsManager)
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
                <Card width="100%" className="shadow-lg p-3 mb-5 bg-white rounded">
                <Form.Group>
                    <h3>{this.state.maintenanceType.name}</h3>
                </Form.Group>
                    <Form.Group>
                        <Form.Control as="select" id="carId" onChange={this.handleFieldChange}>
                        <option value="0"> Select A Car</option>
                            {this.state.cars.map(car => (
                                <option key={`select-option-${car.id}`} value={car.id}>{car.carMake} {car.carModel}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                <Form.Group>
                    <Form.Label><h4>Comment</h4></Form.Label>
                    <Form.Control as="textarea" rows="3" type="textarea" required onChange={this.handleFieldChange} name="text" id="message" />
                </Form.Group>
                <Button variant="warning" disabled={this.state.loadingStatus} onClick={this.constructNewTicket}>Submit</Button>
                </Card>
                </>
           )
    }
}






export default HomeDetail;











