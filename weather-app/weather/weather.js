const request = require('request');
const FORECAST_KEY = 'ebbc9c7022fa0eef29199c55ed0f52b7';

var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/${FORECAST_KEY}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        } else {
            callback('unable to fetch weather');

        }
    });
};

module.exports.getWeather = getWeather;
