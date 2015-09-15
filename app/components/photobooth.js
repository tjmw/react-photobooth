import React from 'react';
import Video from './video';
import SnapshotButton from './snapshot-button';
import Countdown from './countdown';
import SnapshotList from './snapshot-list';

class Photobooth extends React.Component {
  render() {
    return (
      <div className="photobooth">
        <h1>React Photobooth</h1>
        <div className="video">
          <Video />
          <SnapshotButton />
        </div>
        <Countdown />
        <SnapshotList />
      </div>
    );
  }
}

export default Photobooth;
