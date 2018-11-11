
const yargs = require('yargs');

const geocode=require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address);


