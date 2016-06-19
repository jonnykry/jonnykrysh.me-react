import React from 'react';
import { render } from 'react-dom';

import LandingPage from './components/LandingPage.jsx';

class App extends React.Component {
  render () {
    return <LandingPage />;
  }
}

render(<App/>, document.getElementById('app'));
