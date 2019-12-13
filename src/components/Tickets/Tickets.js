import React, { Component } from "react"

class Tickets extends Component {
    render(){
        console.log(this.props)
        // <h2><span className="card-message">{this.props.car.carId}</span></h2>
        return(
            <>
            <div className="ticketBox">
            <h6>Time Stamp: {this.props.message.timeStamp}</h6> 
            <h2><span className="card-message">{this.props.message.message}</span></h2>
            <button type="button" onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
            </div>
            </>
        )
        }

}

export default Tickets




