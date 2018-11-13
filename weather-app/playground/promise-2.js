const request = require('request');
const MAP_KEY = '0ZYk0xNZdGoJj4ANnehvcKt9DP4Yz1db';

var geocodeAddress = (address) => {

    return new Promise((resolve, reject) => {

        var encodeAddress = encodeURIComponent(address);

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=${MAP_KEY}&location=${encodeAddress}}`,
            json: true
        }, (error, response, body) => {

            if (error) {
                reject('Unable to connect to google servers')
            } else if (!body) {
                reject('body is undefined')
            }
            else {

                var location = body.results[0].locations[0];

                resolve({
                    address: location.street,
                    Longitude: location.latLng.lng,
                    Latitude: location.latLng.lat
                });
            }

        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log('errorMessage :', errorMessage);
});