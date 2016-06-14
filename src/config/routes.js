import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, Router, Route, Redirect} from 'react-router'
import App from '../containers/App/App'
import Container from '../views/Main/Container'


var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/restaurants" component={Container}/>
    </Route>
  </Router>
);

module.exports = routes;
