import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const Notes = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      notes: [],
    }
  },

  componentDidMount: function() {
    axios.get('http://localhost:3000/notes')
    .then((response) => {
        this.setState({
          notes: response.data,
          loading: false,
        })
    });
  },

  render: function() {
    if (this.state.loading) {
      return <div>loading......</div>
    }
    return (
      <div>
        { this.state.notes.map(function(note, index) {
          return <div key={index}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        })}
      </div>
    )
  }
});

export default Notes;
