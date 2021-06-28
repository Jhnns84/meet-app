import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'white';
  }

  getStyle = () => {
    return {
      color: this.color,
      background: 'rgba(0, 0, 0, 0.5)',
      margin: '20px',
    };
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'white';
  }

  getStyle = () => {
    return {
      color: this.color,
      background: 'rgba(255, 0, 0, 0.7)',
      margin: '20px',
    };
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'white';
  }

  getStyle = () => {
    return {
      color: this.color,
      background: 'rgba(255, 139, 0, 0.7)',
      margin: '20px',
    };
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'white';
  }

  getStyle = () => {
    return {
      color: this.color,
      background: 'rgba(0, 0, 0, 0.5)',
      margin: '20px',
    };
  }
}


export { InfoAlert, ErrorAlert, WarningAlert, OfflineAlert };