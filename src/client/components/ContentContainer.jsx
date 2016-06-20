import React from 'react';

import './ContentContainer.scss';

import Landing from './sections/Landing.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Toolkit from './sections/Toolkit.jsx';

export default class ContentContainer extends React.Component {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <Projects />
        <Toolkit />
      </div>
    );
  }
}
