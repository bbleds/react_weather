'use strict';

const React = require('react');
const WeatherMsg = require('WeatherMsg');
const WeatherForm = require('WeatherForm');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState: function(){
    return {
      location: 'Nashville',
      temp: 88
    }
  },
  // handle a location search
  handleSearch: function(location){
    let that = this;
    openWeatherMap.getTemp(location)
    .then(function(temp){
      that.setState({
        location: location,
        temp: temp
      });
    }, function(errorMessage){
      console.log('Oops, we got an error',errorMessage);
    });
    console.log('calling parent search on location:', location);
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
