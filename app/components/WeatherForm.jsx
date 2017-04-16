'use strict';

const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    let location = this.refs.location.value;

    if(!location){
      console.log('Oops, please eneter a location name');
      return false;
    }

    // call parent function with the location from our form
    this.props.onSearch(location);
    // clear out our form
    this.refs.location.value = '';
  },
  // render this to DOM
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location" placeholder="Enter city name"/>
        <button type="submit">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
