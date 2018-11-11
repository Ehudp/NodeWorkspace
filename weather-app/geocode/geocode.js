
const request = require('request');
const KEY = '0ZYk0xNZdGoJj4ANnehvcKt9DP4Yz1db';

var geocodeAddress=(address)=>{

    var encodeAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodeAddress}}`,
        json: true
    }, (error, response, body) => {
    
        if (error) {
            console.log('Unable to connect to google servers');
    
        } else if (!body) {
            console.log('body is undefined');
        }
        else {
    
            var address = body.results[0];
            var location = address.locations[0];
    
            console.log(`Latitude ${location.latLng.lat} Longitude ${location.latLng.lng}`);
            console.log('---------');
            console.log(JSON.stringify(address, undefined, 2));
        }
    
    });
};

module.exports.geocodeAddress=geocodeAddress;
