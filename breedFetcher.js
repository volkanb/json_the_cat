const request = require('request');
const myArgs = process.argv.slice(2);
const apiEndpointWQuery = 'https://api.thecatapi.com/v1/breeds/search?q=' + myArgs[0];

// Make an API request
request(apiEndpointWQuery, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0]['description']);
});