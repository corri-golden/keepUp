import React, { Component } from "react"
import { Col, Container, Row, Card, Image, Button, Form, ListGroup } from "react-bootstrap"
import { getUser } from '../modules/Helper.js';




class Cars extends Component {
    render() {
        return (
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            {/* <Card.Text border="secondary">{this.props.car.userName}</Card.Text> */}
            <Card.Header><h2>Cars</h2></Card.Header>
            <ListGroup variant="flush" />
                <ListGroup.Item><h4>{this.props.user.carMake}</h4></ListGroup.Item>
                <ListGroup.Item text=""><h4>{this.props.user.carModel}</h4></ListGroup.Item>
                <ListGroup.Item text=""><h4>UserId: {this.props.user.userId}</h4></ListGroup.Item>
                <Button variant="danger" onClick={() => this.props.deleteCar(this.props.user.id)} size="lg">
                Delete
                </Button>
                <Button border="primary" className="mt-3" variant="warning" onClick={() => { this.props.history.push(`/cars/${this.props.user.id}/edit`) }} size="lg">Update</Button>

            </Card>
        )
    }
}


export default Cars