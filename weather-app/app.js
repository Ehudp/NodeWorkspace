
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

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
    if (errorMessage){
        console.log(JSON.stringify(errorMessage,undefined,2));
    } else{
        console.log(JSON.stringify(results,undefined,2));
    }
});


