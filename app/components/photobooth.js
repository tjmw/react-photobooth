import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Video from './video';
import SnapshotButton from './snapshot-button';
import SnapshotList from './snapshot-list';
import Countdown from './countdown';
import { captureSnapshot, initiateCountdown } from '../actions';
import Immutable from 'immutable';

class Photobooth extends React.Component {
  render() {
    const { dispatch, counter, snapshots, snapshotInProgress } = this.props;

    return (
      <div className="photobooth">
        <h1>React Photobooth</h1>
        <div className="video">
          <Video ref="video" />
          <SnapshotButton onClick={() => dispatch(initiateCountdown(this.refs.video.video()))}
            countdown={counter}
            snapshotInProgress={snapshotInProgress} />
        </div>
        <SnapshotList snapshots={snapshots}/>
      </div>
    );
  }
}

Photobooth.propTypes = {
  snapshots: PropTypes.instanceOf(Immutable.List).isRequired
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    snapshots: state.get('snapshots'),
    counter: state.get('counter'),
    snapshotInProgress: state.get('snapshotInProgress'),
  }
}

export default connect(select)(Photobooth);
