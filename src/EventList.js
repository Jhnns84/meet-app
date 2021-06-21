import React, { Component } from 'react';
import Event from './Event';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Row className="EventList">
        {events.map(event => 
          <Col sm={6} md={6} xl={4}  key={event.id}>
            <Event event={event} />
          </Col>
          )}
      </Row>
    );
  }
}

export default EventList;