import React from 'react';

import MusicWidget from './MusicWidget.jsx';

import './LandingContainer.scss';
import keys from '../../../keys.json';

export default class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      // default widget to collapsed
      widgetToggle: false,
    }
  }
  handleWidgetToggle(e) {
    e.stopPropagation();

    const toggleState = this.state.widgetToggle;
    this.setState({
      widgetToggle: !toggleState,
    });
  }
  render () {
    return (
      <div className="container">
        <h1>Jonny Krysh</h1>
        <div className="content">Content</div>
        <div className="footer">Footer</div>
        <MusicWidget
          url={'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jonnydoesmusic&format=json&api_key=' + keys.apikeys.lastfm}
          isOpen={this.state.widgetToggle}
          onToggle={this.handleWidgetToggle.bind(this)}
          />
      </div>
    );
  }
}
