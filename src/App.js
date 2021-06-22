import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends Component {
  state = {
    events: [],
    locations: [], 
    numberOfEvents: 32, 
    currentCity: 'all',
  };

  updateEvents = (location, numberOfEvents) => {
    
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events.slice(0, numberOfEvents) :
      events.filter((event) => event.location === location);
      if (this.mounted) {
      // const { numberOfEvents } = this.state
      this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        currentCity: location, 
      });
    }
    });
  }

  updateNumberOfEvents(eventNumber) {
    this.setState({ numberOfEvents: eventNumber });
    const { currentCity } = this.state;
    this.updateEvents(currentCity, eventNumber)
  }

  componentDidMount() {
    this.mounted = true;
    const { numberOfEvents } = this.state;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, numberOfEvents), locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App"> 
      <h1>MEET.APP</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col} >
            <Col lg={10}>
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
            </Col>
          </Form.Group>

          <Form.Group as={Col} >
            <Col lg={10}>
            <NumberOfEvents updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} />
            </Col>
          </Form.Group>
        </Form.Row>
      </Form>
        

        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;