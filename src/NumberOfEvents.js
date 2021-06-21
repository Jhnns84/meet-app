import React, { Component } from 'react';

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
      <label>Choose how many events to display</label>
        <input
          type="number" 
          className="NumberInput"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;