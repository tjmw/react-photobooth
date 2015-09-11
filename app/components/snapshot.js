import React from 'react';

class Snapshot extends React.Component {
  render() {
    return(
      <li>
        <img src={this.props.image}></img>
      </li>
    );
  }
}

export default Snapshot;
