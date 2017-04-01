import React, { Component } from 'react';

import Counter from '../Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter id="1"/>
        <Counter id="2"/>
        <Counter id="3"/>
      </div>
    );
  }
}

export default App;
