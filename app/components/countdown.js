import React, { Component, PropTypes } from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='countdown'>{this.props.counter}</div>
    );
  }
}

Countdown.propTypes = {
  counter: PropTypes.number.isRequired
};

export default Countdown;
