import React, { Component } from 'react';
// import EventManager from '../../Modules/EventManager';





class WeeklyReviewForm extends Component {
    render() {
        return (
            <>
            <div className="card">
          <div className="card-body">
          <article id="newWeeklyReviewForm"><h1>Add</h1>
          <section>
              <h3>Date</h3>
              <input type="text" id="date" onChange={this.handleFieldChange}/>
          </section>
      
          <section>
              <h3>Mileage</h3>
              <input type="text" id="mileage" onChange={this.handleFieldChange}/>
          </section>
      
          <section>
          <h3>Recommendations</h3>
          <input type="text" id="recommendations" onChange={this.handleFieldChange}/>
          </section>
          <button id="saveEvent" disabled={this.state.loadingStatus} onClick={this.constructNewEvent}>Save</button>
          </article>
          </div>
      </div>
      </>




        )

    }

}