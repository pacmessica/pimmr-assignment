import React from 'react'
import ReactDOM from 'react-dom'
import Container from './views/Main/Container'
import {browserHistory, Router, Route, Redirect} from 'react-router'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
    </Route>
  </Router>
),document.querySelector('#root'));
