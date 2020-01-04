import React, { Component, Link } from 'react'
import usersManager from '../modules/usersManager.js'
import { Button } from 'react-bootstrap'
import { getUser } from "../modules/Helper"
import User from './User'





class UserList extends Component {

    state = {
        users: [],
    }

    componentDidMount() {
        usersManager.getAllUsers()
        .then(users => {
            console.log(users)
            this.setState({users: users})
        }
        )}  

        deleteUser = id => {                // needs to match what's being passed below with the delete variable
        usersManager.delete(id)
            .then(() => {
                usersManager.getAllUsers()
                    .then((newUsers) => {
                        this.setState({
                            users: newUsers
                        })
                    })
            })
    }

        render() {
            return (
                <>
                {/* <Button block className="shadow-lg p-3 mb-5 bg-variant rounded" variant="warning" type="button" onClick={() => {this.props.history.push("/user")}} >Add Weekly Summary</Button> */}
                <div className="container-cards">
                        
                    {this.state.users.map(user =>
                        <User
                            key={user.id}
                            user={user}
                            deleteUser={this.deleteUser}  // passing props to the child comp tickets
                            {...this.props}
                        />
                    )}
                </div>
                </>
            );
        }
    
    }




export default UserList
