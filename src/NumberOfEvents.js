import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32, 
    errorText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value <= 0) {
      return this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a valid number',
      });
    } else {
      this.setState({
        numberOfEvents: value, 
        errorText: '',
      });
      this.props.updateNumberOfEvents(event.target.value);
    }
  };

  // handleItemClicked = (suggestion) => {
  //   this.setState({
  //     query: suggestion
  //   });
  // };

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.errorText} />
      <Form.Label className="formLabel">Choose number of events</Form.Label>
      <Col >
        <input 
          type="number" 
          className="NumberInput"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        </Col>
      </div>
    );
  }
}

export default NumberOfEvents;