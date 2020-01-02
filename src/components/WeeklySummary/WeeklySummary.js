import React, { Component } from "react"
import { Col, Container, Row, Card, Image, Button, Form } from "react-bootstrap"




class WeeklySummary extends Component {
    render() {
        return (
            <Card width="100%" className="shadow-lg p-3 mb-5 bg-white rounded">
                
                    <Card.Header><h1>{this.props.weeklySummary.date}</h1></Card.Header>
                    <Card.Body>
                        
                        <div className="d-flex flex-column">
                        <Card.Text border="secondary" bg="primary" rows="3">{this.props.weeklySummary.mileage}</Card.Text>
                        <Card.Text border="secondary" bg="primary" rows="3">{this.props.weeklySummary.recommendations}</Card.Text>

                        
                        </div>
                    </Card.Body>
                    
                    
                </Card>
        )
    }
}

{/* <Card.Text border="secondary">{this.props.ticket.user.userName}</Card.Text> */}

export default WeeklySummary