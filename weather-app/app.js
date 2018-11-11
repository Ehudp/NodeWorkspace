const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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



geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {

        //console.log(results.address);

        weather.getWeather(results.Latitude, results.Longitude, (errorMessage, weatherResult) => {

            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`it's currently ${weatherResult.temperature}. it's feels like ${weatherResult.apparentTemperature} `);
            }
        })
    }
});




