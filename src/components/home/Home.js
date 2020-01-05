import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Col, Container, Row, Card, Image, Button } from "react-bootstrap"
import maintenanceTypeManager from "../modules/maintenanceTypeManager.js"
import { getUser } from '../modules/Helper.js';
import usersManager from '../modules/usersManager.js'



import './Home.css'

class Home extends Component {

    componentDidMount() {
        maintenanceTypeManager.getAll()
            .then(maintenanceTypes => {
                console.log("maintenance type", maintenanceTypes)
                this.setState({ maintenanceTypes: maintenanceTypes })
            })
    }

    render() {
        return (
            <>
            {(getUser().isAdmin === true)
                ?
                <>
                <header><h1>KeepUp</h1></header>
                <Button href="UserForm" to width="90%" variant="warning" className="shadow-lg mt-4 mb-5 rounded"  size="lg" block>Add User</Button>
                <Button href="/CarForm" variant="warning" className="shadow-lg p-2 mb-5 rounded" size="lg" block>Add Car</Button>
                
                
                {/* <Link to="/Car" value="Antilock Brake Warning"><img className="imgSize" src={require('./photos/Antilock Brake Warning.jpg')} alt="antiLock" /></Link> */}
                
                
                
                </>
                :
                <>
                    <div className="imgContainer">
                        <Link to="/HomeDetail/1" value="Airbag Indicator"><img className="imgSize" src={require('./photos/Airbag Indicator.jpg')} alt="airbag" /></Link>
                        <Link to="/HomeDetail/2" value="Antilock Brake Warning"><img className="imgSize" src={require('./photos/Antilock Brake Warning.jpg')} alt="antiLock" /></Link>
                        <Link to="/HomeDetail/3" value="Battery Alert"><img className="imgSize" src={require('./photos/BatteryAlert2.jpg')} alt="battery" /></Link>
                        <Link to="/HomeDetail/4" value="Engine Temperature"><img className="imgSize" src={require('./photos/Engine Tempature.jpg')} alt="battery" /></Link>
                        <Link to="/HomeDetail/5" value="Oil Pressure"><img className="imgSize" src={require('./photos/Oil Pressure.jpg')} alt="oil" /></Link>
                        <Link to="/HomeDetail/6" value="Tire Pressure"><img className="imgSize" src={require('./photos/Tire Pressure Warning.jpg')} alt="tire" /></Link>
                        <Link to="/HomeDetail/7" value="Traction Control"><img className="imgSize" src={require('./photos/Traction Control.jpg')} alt="tire" /></Link>
                        <Link to="/HomeDetail/8" value="Washer Fluid Indicator"><img className="imgSize" src={require('./photos/Washer Fluid Indicator.jpg')} alt="tire" /></Link>
                        <Link to="/HomeDetail/9" value="question"><img className="imgSize" src={require('./photos/question1.jpg')} alt="question" /> </Link>
                    </div>
                </>    
            }  
            </> 
        )
    }  
}

export default Home