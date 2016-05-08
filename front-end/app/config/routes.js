import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../containers/App';
import Home from '../components/Home';
import Notes from '../components/notes';
import NotesAdd from '../components/notes/NotesAdd';
// import NotesDelete from '../components/notes/NotesDelete';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App} name='Home'>
      <IndexRoute component={Home} />
      <Route path='notes' name='notes'>
        <IndexRoute component={Notes} />
        <Route path='add' component={NotesAdd} name='Add' />
        {/*<Route path='edit/:id' component={NotesEdit} name='edit'/>*/}
        {/*<Route path=':id' component={NotesView} name='view' />*/}
      </Route>
    </Route>
  </Router>
);

export default routes;
