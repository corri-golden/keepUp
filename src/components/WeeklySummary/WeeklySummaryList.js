import React, { Component } from 'react'
import weeklySummaryManager from '../modules/weeklySummaryManager'
import { getUser } from "../modules/Helper"
import usersManager from "../modules/usersManager"
import WeeklySummary from "./WeeklySummary"




class WeeklySummaryList extends Component {

    state = {
        weeklySummaries: []
    }

    componentDidMount() {
        if (getUser().isAdmin === true) {
            weeklySummaryManager.getAll()
                .then(weeklySummaryArray => {
                    console.log("weeklySummaryArray", weeklySummaryArray)
                    this.setState({
                        weeklySummaries: weeklySummaryArray
                    })
                })
        } else {
            weeklySummaryManager.getAllUserWeeklySummary(getUser().id)
                .then(weeklySummariesArray => {
                    console.log("yo yo", weeklySummariesArray)
                    this.setState({
                        weeklySummaries: weeklySummariesArray
                    })
                })
        } usersManager.getUsers(getUser().id)
            .then(usersArray => {
                console.log("usersArray", usersArray)
                this.setState({
                    users: usersArray
                })
            })
    }

    deleteWeeklySummary = id => {                // needs to match what's being passed below with the delete variable
        weeklySummaryManager.delete(id)
            .then(() => {
                weeklySummaryManager.getAllUserWeeklySummaries(getUser().id)
                    .then((newWeeklySummaries) => {
                        this.setState({
                            weeklySummaries: newWeeklySummaries
                        })
                    })
            })
    }
    
    
    
    render() {
        console.log("render")
        console.log(this.deleteWeeklySummary)
        return (
            <div className="container-cards">
                {this.state.weeklySummaries.map(weeklySummary =>
                    <WeeklySummary
                        key={weeklySummary.id}
                        weeklySummary={weeklySummary}
                        deleteWeeklySummary={this.deleteWeeklySummary}  // passing props to the child comp tickets
                        {...this.props}
                    />
                )}
            </div>
        );
    }

}

export default WeeklySummaryList