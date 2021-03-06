import React, { Component } from "react"
import { Col, Container, Row, Card, Image, Button, Form, ListGroup } from "react-bootstrap"
import { getUser } from '../modules/Helper.js';




class Cars extends Component {
    render() {
        return (
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            {/* <Card.Text border="secondary">{this.props.car.userName}</Card.Text> */}
            <Card.Header><h2>{this.props.user.carMake} {this.props.user.carModel}</h2></Card.Header>
            <ListGroup variant="flush" />
                <ListGroup.Item text=""><h4>{this.props.user.user.userName}</h4></ListGroup.Item>
                <Button variant="danger" onClick={() => this.props.deleteCar(this.props.user.id)}>
                Delete
                </Button> <Button border="primary" className="mt-3" variant="warning" onClick={() => { this.props.history.push(`/cars/${this.props.user.id}/edit`) }}>Update</Button>
                

            </Card>
        )
    }
}


export default Cars