import React from 'react';
import SnapshotStore from '../stores/snapshot-store';
import Snapshot from './snapshot';

class SnapshotList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snapshotList: SnapshotStore.getSnapshotList()
    };
  }

  componentDidMount() {
    SnapshotStore.addChangeListener(this.setSnapshot.bind(this));
  }

  setSnapshot() {
    this.setState({snapshot: SnapshotStore.getSnapshotList()});
  }

  render() {
    return (
      <ul className='snapshot-list'>
        {this.state.snapshotList.map((image, idx) => {
          return <Snapshot key={idx} image={image} />
        })}
      </ul>
    );
  }
}

export default SnapshotList;
