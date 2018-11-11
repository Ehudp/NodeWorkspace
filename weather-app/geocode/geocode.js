
const request = require('request');
const MAP_KEY = '0ZYk0xNZdGoJj4ANnehvcKt9DP4Yz1db';


var geocodeAddress = (address, callback) => {

    var encodeAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${MAP_KEY}&location=${encodeAddress}}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('Unable to connect to google servers')
        } else if (!body) {
            callback('body is undefined')
        }
        else {

            var location =  body.results[0].locations[0];
           
            callback(undefined, {
                address: location.street,
                Longitude: location.latLng.lng,
                Latitude: location.latLng.lat
            });
        }

    });
};

module.exports.geocodeAddress = geocodeAddress;

