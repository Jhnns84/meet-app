import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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
      <Card className="event">
        <Card.Body>
        <Card.Title className="summary">{event.summary}</Card.Title>
          <p className="date">Start Date: {event.start.dateTime}</p>
          <p className="timezone">Timezone: {event.start.timeZone}</p>
          <p className="location">Location: {event.location}</p>
          <Button variant="dark" className="details-btn" onClick={this.buttonToggle}>
            show/hide details
          </Button>
            {this.state.showDetails && (
              <p className="description">{event.description}</p>
            )}
            </Card.Body>
        </Card>

    );
  }
}
export default Event;