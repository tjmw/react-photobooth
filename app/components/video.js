import React from 'react';
import Actions from '../actions';
import CountdownStore from '../stores/countdown-store';

class Video extends React.Component {
  componentDidMount() {
    let mediaOptions = { audio: false, video: true };
    let video = this.video();

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    let success = function(stream) {
      video.src = window.URL.createObjectURL(stream);
    };

    let error = function(e) {
      console.log(e)
    };

    navigator.getUserMedia(mediaOptions, success, error);

    CountdownStore.addChangeListener(this.takeSnapshot.bind(this));
  }

  video() {
    return React.findDOMNode(this.refs.video)
  }

  takeSnapshot() {
    if (CountdownStore.getTimeLeft() != 0) {
      return;
    }

    let canvas = document.createElement('canvas');
    const width = 200;
    const height = 150;

    canvas.width = width;
    canvas.height = height;

    let context = canvas.getContext('2d');
    context.translate(width, 0);
    context.scale(-1, 1);

    context.drawImage(this.video(), 0, 0, width, height);

    var data = canvas.toDataURL('image/png');

    Actions.snapshot(data);
  }

  render() {
    return (
      <video ref="video" autoPlay="true"></video>
    );
  }
}

export default Video;
