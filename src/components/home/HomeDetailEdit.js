import React, { Component } from "react"
import ticketManager from "../modules/ticketManager"






class HomeDetailEdit extends Component {    // responsible for filling in state for what's typed into the input box
    state = {
        message: "",
        loadingStatus: true,
      }

      handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
      }
  
      updateExistingMessage = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedMessage = {
            message: this.state.message,
        };
  
        ticketManager.update(editedMessage)
        .then(() => this.props.history.push("/tickets"))
      }
  
      componentDidMount() {
        ticketManager.get(this.props.match.params.messageId)
        .then(message => {
            this.setState({
              message: message.message,
              loadingStatus: false,
            });
        });
      }
  
      render() {
        return (
          <>
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="message"
                  value={this.state.message}
                />
                <label htmlFor="Maintenance"></label>
                <button
                  type="button" disabled={this.state.loadingStatus}
                  onClick={this.updateExistingMessage}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
          </>
        );
      }
  }
  
  export default HomeDetailEdit







