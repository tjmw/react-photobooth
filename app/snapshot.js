import React from 'react';
import SnapshotStore from './snapshot-store';

const PLACEHOLDER_SNAPSHOT = 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Wait%20for%20it&w=800&h=600';

class Snapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { snapshot: PLACEHOLDER_SNAPSHOT };
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
