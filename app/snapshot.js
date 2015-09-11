import React from 'react';
import SnapshotStore from './snapshot-store';

class Snapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snapshot: SnapshotStore.getSnapshot()
    };
  }

  componentDidMount() {
    SnapshotStore.addChangeListener(this.setSnapshot.bind(this));
  }

  setSnapshot() {
    this.setState({snapshot: SnapshotStore.getSnapshot()});
  }

  render() {
    return (
      <img src={this.state.snapshot}></img>
    );
  }
}

export default Snapshot;
