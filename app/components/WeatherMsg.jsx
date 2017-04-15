'use strict';

const React = require('react');

const WeatherMsg = React.createClass({
  // render this to DOM
  render: function(){
    return (
      <div>
        <h1>Weather message goes here</h1>
      </div>
    );
  }
});

module.exports = WeatherMsg;
