import React, { Component } from "react"

class Tickets extends Component {
    render(){
        console.log(this.props)
        // <h2><span className="card-message">{this.props.car.carId}</span></h2>
        return(
            <>
            <div className="ticketBox">
            <h6>Time Stamp: {this.props.ticket.timeStamp}</h6> 
            <h2><span className="card-message">{this.props.ticket.message}</span></h2>
            <button type="button" onClick={() => this.props.deleteTicket(this.props.ticket.id)}>Delete</button>
            <button type="button"
            onClick={() => {this.props.history.push(`/tickets/${this.props.ticket.id}/edit`)}}>Edit</button>
            </div>
            </>
        )
        }

}

export default Tickets




