const request=require('request');
const KEY='0ZYk0xNZdGoJj4ANnehvcKt9DP4Yz1db';

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=0ZYk0xNZdGoJj4ANnehvcKt9DP4Yz1db&location=1301%20lombard%20street%20philadelphia',
    json: true
  }, (error, response, body) => {
    console.log(JSON.stringify(body,undefined,2));
  });
  