import React, { Component } from "react"
import ticketManager from '../modules/ticketManager'
import Tickets from "./Tickets.js"



class TicketList extends Component {


    state = {
        messages: [],
    }

    componentDidMount() {
        ticketManager.getAll()
        .then(messages => {
            console.log(messages)
            this.setState({messages: messages})
        }
        )}

        deleteMessage = id => {
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
        console.log(this.state.messages)
        return (
            <div className="container-cards">
                    {this.state.messages.map(message =>
                        <Tickets
                            key={message.id}
                            message={message}
                            {...this.props}
                        />
                    )}
                </div>
        );
    }

}


export default TicketList;