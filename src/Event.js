import React, { Component } from "react";
import Button from 'react-bootstrap/Button'

import { mockData } from './mock-data';

class Event extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false, 
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
    const { event } = this.props;
    return (
    <div className="event">
      <h1 className="summary">{event.summary}</h1>
      <p className="date">Start Date: {event.start.dateTime}</p>
      <p className="timezone">Timezone: {event.start.timeZone}</p>
      <p className="location">Location: {event.location}</p>
      <button className="details-btn" onClick={this.buttonToggle}>
        show/hide details
      </button>
        {this.state.showDetails && (
          <p className="description">{event.description}</p>
        )}
    </div>

    );
  }
}
export default Event;