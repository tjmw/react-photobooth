import React from 'react';
import Actions from '../actions';
import CountdownStore from '../stores/countdown-store';

class SnapshotButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snapshotButtonDisabled: false
    };
  }

  componentDidMount() {
    CountdownStore.addChangeListener(this.countdownChanged.bind(this));
  }

  countdownChanged() {
    if (CountdownStore.getTimeLeft() != 0) {
      this.setState({ snapshotButtonDisabled: false });
    }
  }

  initiateCountdown() {
    this.setState({ snapshotButtonDisabled: true });
    Actions.initiateCountdown();
  }

  render() {
    return (
      <button disabled={this.state.snapshotButtonDisabled} onClick={this.initiateCountdown.bind(this)}>Take snapshot</button>
    );
  }
}

export default SnapshotButton;

