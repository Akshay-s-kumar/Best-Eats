
const axios = require('axios')
const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
  params: {
    latitude: '11.258753',
    longitude: '75.780411',
  },
  headers: {
    'X-RapidAPI-Key': '5f99e353eemshbd7adf73475b72fp137831jsn0a6358418d31',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options)
  .then(response => {
    for (let i = 0; i < response.data.data.length; i++) {
      if (response.data.data && response.data.data.length > 0){
        console.log(response.data.data[i].name);
      }
      }
  })
  .catch(error => {
    console.error(error);
  });






  /**############################*/
  const axios = require('axios');

// Define the base URL for the OpenStreetMap API
const nominatimBaseUrl = 'https://nominatim.openstreetmap.org/search';
const restaurantBaseUrl = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

// Specify the location you want to search for
const location = 'kozhikode';

// Define parameters for the OpenStreetMap API request
const nominatimParams = {
  q: location,
  format: 'json'
};

// Make a GET request to the OpenStreetMap API to get latitude and longitude
axios.get(nominatimBaseUrl, { params: nominatimParams })
  .then(response => {
    const data = response.data;
    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      const restaurantParams = {
        latitude: lat,
        longitude: lon
      };
      
      // Define headers for the restaurant API request
      const restaurantHeaders = {
        'X-RapidAPI-Key': '5f99e353eemshbd7adf73475b72fp137831jsn0a6358418d31',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      };

      // Define options for the restaurant API request
      const restaurantOptions = {
        method: 'GET',
        url: restaurantBaseUrl,
        params: restaurantParams,
        headers: restaurantHeaders
      };

      // Make a GET request to the restaurant API
      axios.request(restaurantOptions)
        .then(response => {
          const restaurants = response.data.data;
          if (restaurants && restaurants.length > 0) {
            for (let i = 0; i < restaurants.length; i++) {
              console.log(restaurants[i].name);
            }
          } else {
            console.log('No restaurants found.');
          }
        })
        .catch(error => {
          console.error('Error:', error.message);
        });
    } else {
      console.log('Location not found.');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


