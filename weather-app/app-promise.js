
const yargs = require('yargs');
const axios = require('axios');
const MAP_KEY = '0ZYk0xNZdGoJj4ANnehvcKt9DP4Yz1db';

const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch whether for',
            string: true,
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodeAddress = encodeURIComponent(argv.address);


var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${MAP_KEY}&location=${encodeAddress}}`;


axios.get(geocodeUrl).then((response) => {
    var location = response.data.results[0].locations[0];
    console.log(location);
}).catch((e) => {
    if (e.code == 'ENOTFOUND') {
        console.log('Unable to connect to api servers');
    }
});
