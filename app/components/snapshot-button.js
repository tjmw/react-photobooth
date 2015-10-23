import React, { Component, PropTypes } from 'react';
import Actions from '../actions';

class SnapshotButton extends React.Component {
  constructor(props) {
    super(props);
  }

  text() {
    if (this.props.snapshotInProgress) {
      return String(this.props.countdown);
    } else {
      return 'Take snapshot';
    }
  }

  render() {
    return (
      <button disabled={this.props.snapshotInProgress}
        onClick={this.props.onClick}>{this.text()}</button>
    );
  }
}

SnapshotButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  countdown: PropTypes.number.isRequired,
  snapshotInProgress: PropTypes.bool.isRequired
};

export default SnapshotButton;
