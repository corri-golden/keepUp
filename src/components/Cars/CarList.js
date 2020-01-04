import React, { Component, Link } from 'react'
import weeklySummaryManager from '../modules/weeklySummaryManager'
import { getUser } from "../modules/Helper"
import carsManager from "../modules/carsManager"
import Cars from "./Cars.js"
import { Button } from 'react-bootstrap'




class CarList extends Component {

    state = {
        cars: [],
        carMake: "",
        carModel: "",
        userId: "",
    }

    componentDidMount() {
        carsManager.getAll()
        .then(cars => {
            console.log(cars)
            this.setState({cars: cars})
        }
        )}  
        


        deleteCar = id => {                // needs to match what's being passed below with the delete variable
        carsManager.delete(id)
            .then(() => {
                carsManager.getAll()
                    .then((newCars) => {
                        this.setState({
                            cars: newCars
                        })
                    })
            })
    }

        render() {
            return (
                <>
                <h3>Cars</h3>
                <div className="container-cards">
                        
                    {this.state.cars.map(car =>
                        <Cars
                            key={car.id}
                            user={car}
                            deleteCar={this.deleteCar}  // passing props to the child comp tickets
                            {...this.props}
                        />
                    )}
                </div>
                </>
            );
        }
    
    }
export default CarList