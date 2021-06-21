import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });
    this.props.updateNumberOfEvents(event.target.value);
  };

  // handleItemClicked = (suggestion) => {
  //   this.setState({
  //     query: suggestion
  //   });
  // };

  render() {
    return (
      <div className="NumberOfEvents">
      <Form.Label className="formLabel">Choose how many events to display</Form.Label>
      <Col >
        <input 
          type="number" 
          className="NumberInput"
          placeholder="32"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        </Col>
      </div>
    );
  }
}

export default NumberOfEvents;