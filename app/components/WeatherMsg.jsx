'use strict';

const React = require('react');

const WeatherMsg = React.createClass({
  // render this to DOM
  render: function(){
    return (
      <div>
        <h2>It is {this.props.temp} in {this.props.location}</h2>
      </div>
    );
  }
});

module.exports = WeatherMsg;
