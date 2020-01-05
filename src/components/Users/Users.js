import React, { Component } from "react"
import { Col, Container, Row, Card, Image, Button, Form, ListGroup } from "react-bootstrap"
import { getUser } from '../modules/Helper.js';




class Users extends Component {
    render() {
        return (
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            {/* <Card.Text border="secondary"></Card.Text> */}
            <Card.Header><h3>{this.props.user.userName}</h3></Card.Header>
            <ListGroup variant="flush" />
                {/* <ListGroup.Item><h4>Car: {this.props..car.carMake} {this.props.weeklySummary.car.carModel}</h4></ListGroup.Item> */}
                <Button variant="danger" onClick={() => this.props.deleteUser(this.props.user.id)} size="lg">
                Delete
                </Button>
                <Button border="primary" className="mt-3" variant="warning" onClick={() => { this.props.history.push(`/users/${this.props.user.id}/edit`) }} size="lg">Update</Button>

            </Card>
        )
    }
}


export default Users