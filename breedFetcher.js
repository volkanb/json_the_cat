const request = require('request');

const siberianUrl = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';

// Establish a connection to the url
request(siberianUrl, (error, response, body) => {
  // Write the body to specified file
  console.log(typeof body)
});