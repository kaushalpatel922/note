import React from 'react';
import axios from 'axios';
import {Router, Route, Link, RouteHandler} from 'react-router';
import { hashHistory } from 'react-router';
import AjaxHelpers from '../../utils/ajaxHelpers';

const NotesAdd = React.createClass({
  getInitialState: function () {
    return {
      title: "",
      content: "",
      notesAjaxRan: false
    }
  },

  handleTitle: function(e) {
    this.setState({
      title: e.target.value
    });
  },

  handleContent: function(e) {
    this.setState({
      content: e.target.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({
      title: this.state.title,
      content: this.state.content
    })
  },

  addNotes: function() {
    axios.post('http://localhost:3000/notes', {
      title: this.state.title,
      content: this.state.content
    })
    .then(function(response) {
      this.setState({
        notesAjaxRan: true
      })
      hashHistory.push('notes')
    }.bind(this))
  },

  render: function() {
    return (
      <div>
        <div className="add-notes">
          Title: <input onChange={this.handleTitle} placeholder="Title goes here!"/>
          Content: <input onChange={this.handleContent} placeholder="Content goes here!" />
        </div>

        <button className="" type="submit" onClick={this.props.onSubmit}>
          Add!
        </button>
      </div>
    )
  }
});

export default NotesAdd;
