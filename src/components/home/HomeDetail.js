import React, { Component } from 'react';
import { Button, Input, Form, FormGroup, Label, FormText } from 'reactstrap';
import maintenanceTypeManager from '../modules/maintenanceTypeManager.js'
import ticketManager from '../modules/ticketManager.js'



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
        messages: [],
        timeStamp: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.message === "") {
            window.alert("Fill Out a Message");
        } else {
            this.setState({ loadingStatus: true });
            const message = {
                message: this.state.message,
                timeStamp: new Date (),  // change
            };

            // Create the message and redirect user to ticket 
            ticketManager.post(message)
                .then(() => this.props.history.push("/tickets"));
        }
    };

    componentDidMount() {
        ticketManager.getAll()
        .then(messages => {
            console.log(messages)
            this.setState({messages: messages})
        }
        )}



        
    
    
    
    
    
    render() {
        console.log(this.props.location.search)
        return (
            <Form>
                <div>
                </div>
                <FormGroup>
                <Input type="text" name="text" id="issue" placeholder="Maintenance Issue" />
                    <Label for="exampleSelect">Select Car</Label>
                    <Input type="select" name="select" id="carSelect">
                        <option>Wheel Chair Accessible</option>
                        <option>Honda Accord</option>
                        <option>Dodge Caravan</option>
                        <option>Nissan Altima</option>
                        <option>Toyota Camry</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Comment</Label>
                    <Input type="textarea" required onChange={this.handleFieldChange} name="text" id="message" />
                </FormGroup>
                <Button outline color="secondary" disabled={this.state.loadingStatus} onClick={this.constructNewMessage}>Submit</Button>{ }
            </Form>
        );
    }

}


export default HomeDetail;











