import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({
  render: function(){
    return(
      <div className="home-container">
        <h1 className="main-heading">Note-App</h1>
        <Link to='/notes'>
          <button className="">Note-App</button>
        </Link>
      </div>
    )
  }
});

export default Home;
