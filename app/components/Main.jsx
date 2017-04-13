"use strict";
const React = require('react');

// require custom components
const Nav = require('Nav');

// main app component
const Main = React.createClass({
  // render this to DOM
  render: function(){
    return (
      <div>
        <Nav />
        <h1>Hello from main</h1>
      </div>
    );
  }
});


module.exports = Main;
