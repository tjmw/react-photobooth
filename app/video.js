import React from "react";
import PhotoStore from './photo-store';

class Video extends React.Component {
  componentDidMount() {
    let mediaOptions = { audio: false, video: true };
    let video = React.findDOMNode(this)

    let success = function(stream) {
      video.src = window.URL.createObjectURL(stream);
    }

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    navigator.getUserMedia(mediaOptions, success, function(e) {
      console.log(e);
    });

    PhotoStore.addChangeListener(this.takeSnapshot.bind(this))
  }

  render() {
    return (
      <video autoPlay="true" style={{width: '800px', height: '600px'}}>
      </video>
    );
  }

  takeSnapshot() {
  }
}

export default Video;
