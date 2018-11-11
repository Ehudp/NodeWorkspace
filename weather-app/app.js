const request=require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyBxGECJhXRriXVGMkX9pXpBNNNFLjXox8A',
    
    json: true
  }, (error, response, body) => {
    console.log(body);
  });
  