import React, { Component } from "react"

class Tickets extends Component {
    render(){
        console.log(this.props)
        return(
            <h2><span className="card-message">{this.props.message.message}</span></h2>
        )
        }

}

export default Tickets




