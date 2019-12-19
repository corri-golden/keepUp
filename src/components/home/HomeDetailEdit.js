import React, { Component } from "react"
import { Button, Input, Form, Label, FormText, useAccordionToggle } from 'react-bootstrap';
import ticketManager from "../modules/ticketManager"
import carsManager from "../modules/carsManager";
import maintenanceTypeManager from "../modules/maintenanceTypeManager";
import { getUser } from "../modules/Helper";








class HomeDetailEdit extends Component {    // responsible for filling in state for what's typed into the input box
  state = {
    message: "",
    loadingStatus: true,
    cars: [],
    maintenanceTypeId: "",
    maintenanceTypes: [],
    timeStamp: "",
    userId: [],
  }

  handleFieldChange = evt => {  //sets the value as the user changes it
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingTicket = evt => {    
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedTicket = {
      message: this.state.message,
      id: this.props.match.params.ticketsId,
      carId: Number(this.state.carId),
      maintenanceTypeId: Number(this.state.maintenanceTypeId),
      timeStamp: this.state.timeStamp,
      userId: getUser().id
    };

    ticketManager.update(editedTicket)
      .then(() => this.props.history.push("/tickets"))
  }



  componentDidMount() {
    console.log(this.props)
    ticketManager.get(this.props.match.params.ticketsId)
      .then(ticket => {
        this.setState({
          message: ticket.message,
          loadingStatus: false,
          carId: ticket.carId,
          maintenanceTypeId: ticket.maintenanceTypeId,
          timeStamp: ticket.timeStamp
        });
      });
    const currentUser = JSON.parse(localStorage.getItem("credentials"))
    carsManager.getAllUserCars(getUser().id)
      .then((cars) => {
        this.setState({
          cars: cars
        })
      })
      maintenanceTypeManager.getAll(this.props.match.params.maintenanceType)
      .then((maintenanceTypes) => {
        this.setState({
          maintenanceTypes: maintenanceTypes
        })
      })
  }







  render() {
    console.log(this.state)
    return (
      <>
        <form>
          <fieldset>
            <Form.Group>
              <Form.Label>Maintenance Type</Form.Label>
              <Form.Control as="select" id="maintenanceTypeId" onChange={this.handleFieldChange}>
                {this.state.maintenanceTypes.map(maintenanceType => {
                  return <option value={maintenanceType.id} key={`select-option-${maintenanceType.name}`}>{maintenanceType.name}</option>
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group className="col-md-12 form-group form-inline">
              <Form.Control value={this.state.carId} as="select" id="carId" onChange={this.handleFieldChange}>
                {this.state.cars.map(car => {
                  return <option key={`select-option-${car.id}`} value={car.id}>{car.carMake} {car.carModel}</option>
                })}
              </Form.Control>
            </Form.Group>


            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="message"
                value={this.state.message}
              />
              <label htmlFor="Maintenance"></label>
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingTicket}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default HomeDetailEdit







