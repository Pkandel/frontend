import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Word } from 'containers';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Root extends Component {
  constructor () {
    super();
    injectTapEventPlugin();
  }
  componentDidMount () {
    document.getElementById('loader-container').remove();
  }
  render () {
    return (
      <BrowserRouter>
        <div>
          <h1>
          Strategic frontend test
          </h1>
          <Word />
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
