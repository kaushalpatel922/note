import React from 'react';
import {Link} from 'react-router';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <h1>Notes App</h1>
        </header>
        {this.props.children}
      </div>
    )
  }
});

export default App;
