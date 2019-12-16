import React, { Component } from "react"
import ticketManager from '../modules/ticketManager'
import Tickets from "./Tickets.js"



class TicketList extends Component {


    state = {
        tickets: [],
    }

    componentDidMount() {
        ticketManager.getAll()
        .then(tickets => {
            console.log(tickets)
            this.setState({tickets: tickets})
        }
        )}

        deleteTicket = id => {                // needs to match what's being passed below with the delete variable
            ticketManager.delete(id)
            .then(() => {
              ticketManager.getAll()
              .then((newTickets) => {
                this.setState({
                    tickets: newTickets
                })
              })
            })
          }



        
    render() {
        console.log(this.state.tickets)
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