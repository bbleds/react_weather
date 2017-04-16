"use strict";

const axios = require('axios');
const api_key = process.env.OPEN_WEATHER_API_KEY;
const open_weather_map_url = 'http://api.openweathermap.org/data/2.5/weather?appid=b25fe0f7a3e7ab99286d813ee8225825&units=imperial';

module.exports = {
  getTemp: function(location){
    // url encode our location
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${open_weather_map_url}&q=${encodedLocation}`;
    return axios.get(requestUrl)
    .then(function(data){
      // be sure all is good to go -- handling error edgecase
      if(data.data.cod && data.data.message){
        throw new Error(data.data.message);
      } else {
        return data.data.main.temp;
      }
    }, function(errResp){
      throw new Error(errResp.data.message);
    });
  }
}
