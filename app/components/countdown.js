import React from 'react';
import Actions from '../actions';
import CountdownStore from '../stores/countdown-store';

let countdownTimer;

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: null
    };
  }

  componentDidMount() {
    CountdownStore.addChangeListener(this.updateCountdown.bind(this));
  }

  updateCountdown() {
    this.setState({ timeLeft: CountdownStore.getTimeLeft() })
  }

  render() {
    return (
      <div className='countdown'>{this.state.timeLeft}</div>
    );
  }
}

export default Countdown;
