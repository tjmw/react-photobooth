import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Video from './video';
import SnapshotButton from './snapshot-button';
import SnapshotList from './snapshot-list';
import { captureSnapshot } from '../actions';

class Photobooth extends React.Component {
  render() {
    const { dispatch, snapshots } = this.props;

    return (
      <div className="photobooth">
        <h1>React Photobooth</h1>
        <div className="video">
          <Video ref="video" />
          <SnapshotButton disabled={false} onClick={() => dispatch(captureSnapshot(this.refs.video.video())) }/>
        </div>
        <SnapshotList snapshots={snapshots}/>
      </div>
    );
  }
}

Photobooth.propTypes = {
  snapshots: PropTypes.array.isRequired
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    snapshots: state.snapshots
  }
}

export default connect(select)(Photobooth);
