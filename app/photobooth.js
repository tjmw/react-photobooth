import React from "react";
import Video from "./video";
import SnapshotButton from "./snapshot-button";

class Photobooth extends React.Component {
  render() {
    return (
      <div className="photobooth">
        <Video />
        <SnapshotButton />
      </div>
    );
  }
}

export default Photobooth;
