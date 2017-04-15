'use strict';

const React = require('react');

const WeatherForm = React.createClass({
  // render this to DOM
  render: function(){
    return (
      <form>
        <input type="text" placeholder="Enter city name"/>
        <button type="submit">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
