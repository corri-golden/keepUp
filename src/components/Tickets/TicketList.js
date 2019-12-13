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

        deleteTicket = id => {                // needs to match what's being passed below with the delete variable
            ticketManager.delete(id)
            .then(() => {
              ticketManager.getAll()
              .then((newMessages) => {
                this.setState({
                    messages: newMessages
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
                            // {...this.props}
                            deleteMessage={this.deleteTicket}  // passing props to the child comp tickets
                            {...this.props}
                        />
                    )}
                </div>
        );
    }

}


export default TicketList;