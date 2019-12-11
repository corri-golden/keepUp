import React, { Component } from 'react';
import { Button, Card } from "react-bootstrap"



class HomeDetail extends Component {
    render() {
        return(
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
      </Card.Text>
                <Button variant="primary">Edit</Button>
                
                <Button variant="primary">Delete</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        )
    }
}

export default HomeDetail;











