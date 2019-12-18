import React, { Component } from "react"
import { Button, Input, Form, Label, FormText } from 'react-bootstrap';
import ticketManager from "../modules/ticketManager"
import carsManager from "../modules/carsManager";







class HomeDetailEdit extends Component {    // responsible for filling in state for what's typed into the input box
  state = {
    message: "",
    loadingStatus: true,
    cars: [],
  }

  handleFieldChange = evt => {
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
        });
      });
      const currentUser = JSON.parse(localStorage.getItem("credentials"))
        carsManager.getAll(currentUser.id)
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
        <form>
          <fieldset>
            <Form.Group className="col-md-12 form-group form-inline">
              <Form.Control value={this.state.carId} as="select" id="carId" onChange={this.handleFieldChange}>
                {this.state.cars.map(car => (
                  <option key={`select-option-${car.id}`} value={car.id}>{car.carMake} {car.carModel}</option>
                ))}
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







