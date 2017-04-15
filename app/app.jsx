"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

// require custom components -- note: path is specified as alias in webpack config
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');

// get our react router dependencies, and use destructuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// kickoff react app
ReactDOM.render(
  // pass jsx
<div>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
    </Route>
    <Route path="/about" component={Main}>
      <IndexRoute component={About}/>
    </Route>
  </Router>
</div>,
  // pass dom node
  document.getElementById('app')
);
