import React, { Component } from "react"
import { Col, Container, Row, Card, Image, Button, Form } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer, TiDelete, MdDelete, FaEdit } from 'react-icons/fa';


class Tickets extends Component {

    render() {
        // console.log("tickets props", this.props.ticket.car.carMake)
        // <h2><span className="card-message">{this.props.car.carId}</span></h2>
        return (
            <>
                <Card width="100%" className="shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Header><h1>{this.props.ticket.maintenanceType.name}</h1></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>{this.props.ticket.car.carMake} {this.props.ticket.car.carModel}</h3></Card.Title>
                        <div className="d-flex flex-column">
                        <Card.Text border="secondary" bg="primary" rows="3">{this.props.ticket.message}</Card.Text>

                        <Button variant="danger" onClick={() => this.props.deleteTicket(this.props.ticket.id)} size="lg">
                            Delete
                            </Button>
                        <Button border="secondary" className="mt-3" variant="warning" onClick={() => { this.props.history.push(`/tickets/${this.props.ticket.id}/edit`) }} size="lg">Edit</Button>
                        </div>
                    </Card.Body>
                    
                    <Card.Footer className="text-muted">{this.props.ticket.timeStamp}</Card.Footer>
                </Card>



                {/* <div className="ticketBox">
                    <h6>{this.props.ticket.maintenanceType.name}</h6>
                    <h6>Time Stamp: {this.props.ticket.timeStamp}</h6>
                    <h2><span className="card-message">{this.props.ticket.message}</span></h2>
                    <h2><span className="card-message">{this.props.ticket.car.carMake} {this.props.ticket.car.carModel}</span></h2>
                    <button type="button" onClick={() => this.props.deleteTicket(this.props.ticket.id)}>Delete</button>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/tickets/${this.props.ticket.id}/edit`) }}>Edit</button>
                </div> */}
            </>
        )
    }

}

export default Tickets




