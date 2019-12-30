import React, { Component } from "react"
import ticketManager from '../modules/ticketManager'
import Tickets from "./Tickets.js"
import { getUser } from "../modules/Helper"




class TicketList extends Component {


    state = {
        tickets: [],
    }

    componentDidMount() {
        if (getUser().isAdmin === true) {
            ticketManager.getAll()
                .then(ticketsArray => {
                    console.log("ticketsArray", ticketsArray)
                    this.setState({
                        tickets: ticketsArray
                    })
                })
        } else {
            ticketManager.getAllUserTickets(getUser().id)
                .then(ticketsArray => {
                    console.log("yo yo", ticketsArray)
                    this.setState({
                        tickets: ticketsArray
                    })
                })
        }


    }

    deleteTicket = id => {                // needs to match what's being passed below with the delete variable
        ticketManager.delete(id)
            .then(() => {
                ticketManager.getAllUserTickets(getUser().id)
                    .then((newTickets) => {
                        this.setState({
                            tickets: newTickets
                        })
                    })
            })
    }




    render() {
        console.log("render")
        console.log(this.deleteTicket)
        return (
            <div className="container-cards">
                {this.state.tickets.map(ticket =>
                    <Tickets
                        key={ticket.id}
                        ticket={ticket}
                        deleteTicket={this.deleteTicket}  // passing props to the child comp tickets
                        {...this.props}
                    />
                )}
            </div>
        );
    }

}


export default TicketList;