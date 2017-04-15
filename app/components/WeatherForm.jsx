'use strict';

const React = require('react');

const WeatherForm = React.createClass({
  // render this to DOM
  render: function(){
    return (
      <form onSubmit="">
        <input type="text" ref="cityName" placeholder="Enter city name"/>
        <button type="submit">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
