import React, { Component } from "react"

class Tickets extends Component {
    render(){
        console.log(this.props)
        return(
            <>
            <h6>Time Stamp: {this.props.message.timeStamp}</h6> 
            <h2><span className="card-message">{this.props.message.message}</span></h2>
            </>
        )
        }

}

export default Tickets




