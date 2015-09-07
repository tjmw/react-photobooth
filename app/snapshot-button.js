import React from "react";
import Actions from './actions'

class SnapshotButton extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <button onClick={Actions.takeSnapshot}>Take photo</button>
    );
  }
}

export default SnapshotButton;
