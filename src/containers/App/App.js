import React, { Component } from 'react';

import Counter from '../Counter';

class App extends Component {
  render() {
    return (
      <div>
        {
          [...Array(15).keys()].map((index) => {
            const id = `counter${index}`;
            return <Counter key={id} id={id}/>;
          })
        }
      </div>
    );
  }
}

export default App;
