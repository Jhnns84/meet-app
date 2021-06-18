import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    number: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      number: value
    });
  };

  // handleItemClicked = (suggestion) => {
  //   this.setState({
  //     query: suggestion
  //   });
  // };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number" 
          className="NumberInput"
          value={this.state.number}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;