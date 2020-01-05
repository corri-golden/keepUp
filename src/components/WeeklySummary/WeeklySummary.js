import React, { Component } from "react"
import { Col, Container, Row, Card, Image, Button, Form, ListGroup } from "react-bootstrap"
import { getUser } from '../modules/Helper.js';




class WeeklySummary extends Component {
    render() {
        return (
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Text border="secondary">{this.props.weeklySummary.user.userName}</Card.Text>
            <Card.Header><h2>Weekly Summary</h2></Card.Header>
            <ListGroup variant="flush" />
                <ListGroup.Item><h4>Date: {this.props.weeklySummary.date}</h4></ListGroup.Item>
                <ListGroup.Item><h4>Car: {this.props.weeklySummary.car.carMake} {this.props.weeklySummary.car.carModel}</h4></ListGroup.Item>
                <ListGroup.Item text=""><h4>Mileage: {this.props.weeklySummary.mileage}</h4></ListGroup.Item>
                <ListGroup.Item type="text" rows="8" border="">{this.props.weeklySummary.recommendations}</ListGroup.Item>
        
                <Button variant="danger" onClick={() => this.props.deleteWeeklySummary(this.props.weeklySummary.id)} size="lg">
                Delete
                </Button>
                <Button border="primary" className="mt-3" variant="warning" onClick={() => { this.props.history.push(`/weeklySummaries/${this.props.weeklySummary.id}/edit`) }} size="lg">Edit</Button>

            </Card>
        )
    }
}


export default WeeklySummary