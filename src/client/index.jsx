import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main.jsx';

class App extends React.Component {
  render () {
    return <Main />;
  }
}

render(<App/>, document.getElementById('app'));
