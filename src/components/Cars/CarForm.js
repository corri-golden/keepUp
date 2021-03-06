import React, { Component } from 'react'
import carsManager from '../modules/carsManager'
import { Form, Button } from 'react-bootstrap'
import usersManager from '../modules/usersManager'




class CarForm extends Component {

    state = {
        cars: [],
        users: [],
        userId: "0",
        carMake: "",
        carModel: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewCar = evt => {
        evt.preventDefault();
        if (this.state.userName === "") {
            window.alert("Fill Out a Recommendations");
            // } else if (Number(this.state.id) === 0) {
            //     window.alert("Add UserId");
        } else {
            this.setState({ loadingStatus: true });
            const car = {
                userId: Number(this.state.userId),
                carMake: this.state.carMake,
                // id: Number(this.state.userId),
                carModel: this.state.carModel,
            };
            // Create the message and redirect user to ticket 
            carsManager.post(car)
                .then(() => this.props.history.push("/cars"))
            console.log("yo", car)
        }   
    };


    componentDidMount() {
        usersManager.getAllUsers()
            .then(users => {
                console.log("user", users)
                this.setState({ users: users })
            }
            )
    }
    render() {
        return (
            <form>
                <Form.Group>
                    <Form.Control className="mt-3" onChange={this.handleFieldChange} type="carMake"
                        id="carMake"
                        placeholder="Car Make"
                        required="" autoFocus="" />

                </Form.Group>
                <Form.Group>
                    <Form.Control className="mt-0" onChange={this.handleFieldChange} type="carModel"
                        id="carModel"
                        placeholder="Car Model"
                        required="" />

                </Form.Group>
                <Form.Group>
                        <Form.Control as="select" id="userId" onChange={this.handleFieldChange}>
                        <option value="0"> Select A User</option>
                            {this.state.users.map(user => (
                                <option key={`select-option-${user.id}`} value={user.id}>{user.userName}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                <Button className="center" type="submit" variant="warning" disabled={this.state.loadingStatus} onClick={this.constructNewCar} block>Add New Car
                </Button>
            </form>
        )
    }

}


export default CarForm