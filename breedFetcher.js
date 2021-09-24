const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiEndpoint = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  // Make an API request
  request(apiEndpoint, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);      
      callback(null, data.length ? data[0]['description'] : 'Breed not found!');
    }
  });
};

module.exports = { fetchBreedDescription };