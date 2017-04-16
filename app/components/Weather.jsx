'use strict';

const React = require('react');
const WeatherMsg = require('WeatherMsg');
const WeatherForm = require('WeatherForm');

const Weather = React.createClass({
  getInitialState: function(){
    return {
      location: 'Nashville',
      temp: 88
    }
  },
  // handle a location search
  handleSearch: function(location){
    console.log('calling parent search on location:', location);
    this.setState({
      location: location,
      temp: 23
    })
  },

  // render this to DOM
  render: function(){
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMsg location={this.state.location} temp={this.state.temp}/>
      </div>
    );
  }
});

module.exports = Weather;
