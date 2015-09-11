import React from "react";

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
  }

  render() {
    return (
      <video autoPlay="true" style={{width: '800px'}}>
      </video>
    );
  }
}

export default Video;
