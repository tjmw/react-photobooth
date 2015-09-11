import React from 'react';
import Video from './video';
import SnapshotList from './snapshot-list';

class Photobooth extends React.Component {
  render() {
    return (
      <div className="photobooth">
        <Video />
        <SnapshotList />
      </div>
    );
  }
}

export default Photobooth;
