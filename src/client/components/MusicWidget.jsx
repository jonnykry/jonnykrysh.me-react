import React from 'react';

import './MusicWidget.scss';

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
  onWidgetClick() {
    window.open('http://www.last.fm/user/jonnydoesmusic');
  }
  renderMusicWidget() {
    const { onToggle, isOpen } = this.props;
    const toggleClasse = isOpen ? 'music-widget-toggle fa fa-chevron-down' : 'music-widget-toggle fa fa-chevron-up'
    const mainClasses = isOpen ? 'music-widget' : 'music-widget-shrunk';

    const recentTrack = this.state.data.recenttracks.track[0] || this.state.data.recenttracks.track[1];
    const artist = recentTrack.artist['#text'];
    const song = recentTrack.name;
    const album = recentTrack.album['#text'];
    const albumImageUrl = isOpen ? recentTrack.image[3]['#text'] : recentTrack.image[0]['#text'];

    return (
      <div className={mainClasses} target="_blank">
        <div className={toggleClasse} onClick={onToggle}></div>
        <div className="music-widget-content" onClick={this.onWidgetClick}>
          <div className="track-art">
            <img src={albumImageUrl}/>
          </div>
          <div className="track-info">
            <p className="track-artist">{artist} /</p>
            <p className="track-song">{song} / </p>
            <p className="track-album">{album} / </p>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return this.state.data ? this.renderMusicWidget() : (
      <div className="music-widget">
        <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
        <span> Loading LastFM #NP...</span>
      </div>
    );
  }
}
