import React, { Component, Link } from 'react'




class UserList extends Component {

    state = {
        users: [],
    }

    componentDidMount() {
        userManager.getAll()
        .then(users => {
            console.log(users)
            this.setState({users: users})
        }
        )}  

        render() {
            return (
                <>
                <Button block className="shadow-lg p-3 mb-5 bg-variant rounded" variant="warning" type="button" onClick={() => {this.props.history.push("/weeklySummaries/new")}} >Add Weekly Summary</Button>
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
