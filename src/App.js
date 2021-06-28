import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from './EventGenre';


import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends Component {
  state = {
    events: [],
    locations: [], 
    numberOfEvents: 32, 
    showWelcomeScreen: undefined,
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

  
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };


  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events: events.slice(0, numberOfEvents), locations: extractLocations(events) });
        }
        if (!navigator.onLine) {
          this.setState({
            offlineText: 'App is offline. Showing cached events.',
          });
        } else {
          return this.setState({
            offlineText:''
          });
        }
      });
    }
  }

  

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App"> 
        <h1>MEET.APP</h1>
        <OfflineAlert text={this.state.offlineText} />
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
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          <h4>Events in each city</h4>
          <ResponsiveContainer height={400} >
            <ScatterChart
              width={800}
              height={400}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
        {/* <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} /> */}
      </div>
    );
  }
}

export default App;