'use strict';

const React = require('react');
const WeatherMsg = require('WeatherMsg');
const WeatherForm = require('WeatherForm');

const Weather = React.createClass({
  // render this to DOM
  render: function(){
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm/>
        <WeatherMsg/>
      </div>
    );
  }
});

module.exports = Weather;
