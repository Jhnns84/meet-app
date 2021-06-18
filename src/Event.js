import React, { Component } from "react";

import { mockData } from './mock-data';

class Event extends Component {
  constructor(props) {
    super(props)
    this.state = {

      summary: '',
      date: '',
      timezone: '',
      location: '', 
      showDetails: false, 
      description: ''
    };
    
    this.buttonToggle = this.buttonToggle.bind(this);

  }


  buttonToggle() {
    this.setState({ showDetails: !this.state.showDetails });
  };

  // buttonToggle = () => {
  //   this.setState = 
  //   { showDetails: !this.state.showDetails };
  // };

  render() {
    return (
    <div className="Event">
      <h1 className="summary">{this.state.summary}</h1>
      <h4 className="date">{this.state.date}</h4>
      <h4 className="timezone">{this.state.timezone}</h4>
      <h4 className="location">{this.state.location}</h4>
      <button className="details-button" onClick={this.buttonToggle}>
        show/hide details
      </button>
        {this.state.showDetails && (
          <p className="description">{this.state.description}</p>
        )}
    </div>

    );
  }
}
export default Event;