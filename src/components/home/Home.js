import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Col, Container, Row, Card, Image } from "react-bootstrap"


import './Home.css'

class Home extends Component {
    render() {
        return (
            <Container className="imgWrap">
                <Row noGutters={true}>
                    <Col md={4}>
                        <Card className="imgContainer">
                            <Link to="/HomeDetail?mt=1"><img className="imgSize" src={require('./photos/Airbag Indicator.jpg')} alt="airbag" /></Link>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="imgContainer">
                            <Link to="/HomeDetail?mt=2"><img className="imgSize" src={require('./photos/AntilockBrakeWarning.jpeg')} alt="antiLock" /></Link>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <div className="imgContainer">
                            <Link to="/HomeDetail"><img className="imgSize" src={require('./photos/BatteryAlert2.jpg')} alt="battery" /></Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="imgContainer">
                            <Link to="/HomeDetail"><img className="imgSize" src={require('./photos/Engine Tempature.jpg')} alt="battery" /></Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="imgContainer">
                            <Link to="/HomeDetail"><img className="imgSize" src={require('./photos/Oil Pressure.jpg')} alt="oil" /></Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="imgContainer">
                            <Link to="/HomeDetail"><img className="imgSize" src={require('./photos/TirePressure.jpeg')} alt="tire" /></Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="imgContainer">
                            <Link to="/HomeDetail"><img className="imgSize" src={require('./photos/TractionControl.jpeg')} alt="tire" /></Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="imgContainer">
                            <Link to="/HomeDetail"><img className="imgSize" src={require('./photos/WasherFluid.jpeg')} alt="tire" /></Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/HomeDetail">Other</Link>
                        </li>
                    </Col>
                </Row>
            </Container>
        );
    }
}

{/* <h2>Name: <span className="card-petname">{this.props.animal.name}</span></h2>
                <p>Breed: {this.props.animal.breed}</p>
                <button type="button"
                  onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`) }}>Edit</button>
                <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                >Discharge</button>
                <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link> */}
export default Home