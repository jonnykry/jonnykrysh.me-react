import React from 'react';
import { render } from 'react-dom';

import LandingContainer from './components/LandingContainer.jsx';

class App extends React.Component {
  render () {
    return <LandingContainer />;
  }
}

render(<App/>, document.getElementById('app'));
