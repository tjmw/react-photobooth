import React, { Component, PropTypes } from 'react';
import Actions from '../actions';

class SnapshotButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button disabled={this.props.disabled}
        onClick={this.props.onClick}>Take snapshot</button>
    );
  }
}

SnapshotButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SnapshotButton;
