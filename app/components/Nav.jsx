"use strict";

const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  render: function (){
    return (
      <nav>
        <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
        <IndexLink to='/about' activeClassName="active"  activeStyle={{fontWeight:'bold'}}>About</IndexLink>
        <IndexLink to='/example' activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
      </nav>
    )
  }
});

module.exports = Nav;
