import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }


  render () {
    return null;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
