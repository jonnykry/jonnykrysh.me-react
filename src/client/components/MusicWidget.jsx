import React from 'react';

export default class MusicWidget extends React.Component {
  loadLatestTrack() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(this.props.url));
  }
  componentDidMount() {
    this.loadLatestTrack();
  }
  render() {
    return <p>Music Widget</p>;
  }
}
