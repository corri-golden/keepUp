import React, { Component } from "react"
import { Col, Container, Row, Card, Image, Button, Form, ListGroup } from "react-bootstrap"
import { getUser } from '../modules/Helper.js';




class User extends Component {
    render() {
        return (
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Text border="secondary">{this.props.user.userName}</Card.Text>
            <Card.Header><h2>Users</h2></Card.Header>
            <ListGroup variant="flush" />
                {/* <ListGroup.Item><h4>Car: {this.props..car.carMake} {this.props.weeklySummary.car.carModel}</h4></ListGroup.Item> */}
                <ListGroup.Item text=""><h4>{this.props.user.password}</h4></ListGroup.Item>
        
                <Button variant="danger" onClick={() => this.props.deleteUser(this.props.user.id)} size="lg">
                Delete
                </Button>
                <Button border="primary" className="mt-3" variant="warning" onClick={() => { this.props.history.push(`/weeklySummaries/${this.props.weeklySummary.id}/edit`) }} size="lg">Edit</Button>

            </Card>
        )
    }
}


export default User