import React, { Component, PropTypes } from 'react';
import Snapshot from './snapshot';

class SnapshotList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='snapshot-list'>
        {this.props.snapshots.map((image, idx) => {
          return <Snapshot key={idx} image={image} />
        })}
      </ul>
    );
  }
}

SnapshotList.propTypes = {
  snapshots: PropTypes.array.isRequired
};

export default SnapshotList;
