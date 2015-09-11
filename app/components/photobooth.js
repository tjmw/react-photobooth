import React from 'react';
import Video from './video';
import Snapshot from './snapshot';

class Photobooth extends React.Component {
  render() {
    return (
      <div className="photobooth">
        <Video />
        <Snapshot />
      </div>
    );
  }
}

export default Photobooth;
