import React, { Component } from "react"
import { Col, Container, Row, Card, Image, Button, Form } from "react-bootstrap"
import { getUser } from '../modules/Helper.js';




class WeeklySummary extends Component {
    render() {
        return (
            <Card width="100%" className="shadow-lg p-3 mb-5 bg-white rounded">
               <Card.Text border="secondary">{this.props.weeklySummary.user.userName}</Card.Text>
                <Card.Header><h1>{this.props.weeklySummary.date}</h1></Card.Header>
                <Card.Body>
                <Card.Text border="secondary" bg="primary" rows="3"><h5>Mileage:{this.props.weeklySummary.mileage}</h5></Card.Text>
                <Card.Text border="secondary" bg="primary" rows="3">{this.props.weeklySummary.recommendations}</Card.Text>
                </Card.Body>
                <Button variant="danger" onClick={() => this.props.deleteWeeklySummary(this.props.weeklySummary.id)} size="lg">
                            Delete
                            </Button>
                        <Button border="primary" className="mt-3" variant="warning" onClick={() => { this.props.history.push(`/tickets/${this.props.ticket.id}/edit`) }} size="lg">Edit</Button>


            </Card>
        )
    }
}


export default WeeklySummary