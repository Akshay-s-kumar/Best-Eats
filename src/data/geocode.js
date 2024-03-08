const axios = require('axios');

// Define the base URL for the OpenStreetMap API
const baseUrl = 'https://nominatim.openstreetmap.org/search';

// Specify the location you want to search for
const location = 'kozhikode';

// Define parameters for the API request
const params = {
  q: location,
  format: 'json'
};

// Make a GET request to the API
axios.get(baseUrl, { params })
  .then(response => {
    const data = response.data;
    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      console.log(`Latitude: ${lat}, Longitude: ${lon}`);
    } else {
      console.log('Location not found.');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
