import React from 'react';

export default class MusicWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
  }
  loadLatestTrack() {
    const myHeaders = new Headers();
    fetch(this.props.url).then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => console.error('Error connecting to LastFM: ' + err));
  }
  componentDidMount() {
    this.loadLatestTrack();
  }
  render() {
    if (this.state.data) {
      const recentTrack = this.state.data.recenttracks.track[0] || this.state.data.recenttracks.track[1];
      const artist = recentTrack.artist['#text'];
      const song = recentTrack.name;
      const album = recentTrack.album['#text'];
      const albumImageUrl = recentTrack.image[1]['#text'];
      return (
        <div className="music-widget">
          <p>{artist} - {song} - {album}</p>
          <img src={albumImageUrl} />
        </div>
      );
    }
    return <p>Loading Music Data ...</p>;
  }
}
