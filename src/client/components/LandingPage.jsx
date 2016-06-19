import React from 'react';

import MusicWidget from './MusicWidget.jsx';
import keys from '../../../keys.json';

export default class LandingPage extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="header">Header</div>
        <div className="content">Content</div>
        <MusicWidget url={'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jonnydoesmusic&format=json&api_key=' + keys.apikeys.lastfm}/>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
