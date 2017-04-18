'use strict';

const React = require('react');
const WeatherMsg = require('WeatherMsg');
const WeatherForm = require('WeatherForm');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  // used to handle message state -- only show weather message if our properties exist on state
  renderMessage: function(){
    if(this.state.isLoading){
      return (<h3>Fetching Weather...</h3>);
    } else if(this.state.temp && this.state.location){
      return (<WeatherMsg location={this.state.location} temp={this.state.temp}/>)
    } else {
      return(<h3>To see current weather for a city, enter a cityname in the area above</h3>);
    }
  },
  // handle a location search
  handleSearch: function(location){
    let that = this;
    // since weather was requested, set loading state
    that.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location)
    .then(function(temp){
      // round tempt to next int
      temp = Math.round(temp);
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    // handle error case
    }, function(errorMessage){
      that.setState({
        isLoading: false
      });
      alert(`Oops, we encountered an error when processing your request. Please try again.`);
    });
  },

  // render this to DOM
  render: function(){

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {this.renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
