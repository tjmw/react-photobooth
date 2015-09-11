import React from 'react';
import Actions from '../actions';

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
  }

  video() {
    return React.findDOMNode(this.refs.video)
  }

  takeSnapshot() {
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
      <div className='video'>
        <video ref="video" autoPlay="true"></video>
        <button onClick={this.takeSnapshot.bind(this)}>Take snapshot</button>
      </div>
    );
  }
}

export default Video;
