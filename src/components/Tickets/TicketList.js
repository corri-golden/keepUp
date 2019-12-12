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



        
    render() {
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