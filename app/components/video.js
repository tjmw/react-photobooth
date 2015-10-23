import React from 'react';
import ReactDOM from 'react-dom';
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
    return ReactDOM.findDOMNode(this.refs.video)
  }

  render() {
    return (
      <video ref="video" autoPlay="true"></video>
    );
  }
}

export default Video;
