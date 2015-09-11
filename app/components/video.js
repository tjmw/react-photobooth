import React from 'react';
import Actions from '../actions';

const WIDTH = 800;
const HEIGHT = 600;

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
    canvas.width = 200;
    canvas.height = 150;

    let context = canvas.getContext('2d');

    context.drawImage(this.video(), 0, 0, 200, 150);

    var data = canvas.toDataURL('image/png');

    Actions.snapshot(data);
  }

  render() {
    return (
      <div>
        <video ref="video" autoPlay="true" style={{width: WIDTH + 'px', height: HEIGHT + 'px'}}></video>
        <button onClick={this.takeSnapshot.bind(this)}>Take snapshot</button>
      </div>
    );
  }
}

export default Video;
