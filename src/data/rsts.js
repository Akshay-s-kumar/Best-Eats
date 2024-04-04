import axios from 'axios';

// Define separate location arrays
const kozhikodeLocations = [
  { latitude: '11.258753', longitude: '75.780411' },
];
const kochiLocations = [
  { latitude: '9.9312', longitude: '76.2673' },
];
const bangaloreLocations = [
  { latitude: '12.971599', longitude: '77.594566' },
];

// Define a function to fetch data from API or local storage
const fetchDataForLocations = async (locations, locationName) => {
  const locationResponses = [];

  for (const location of locations) {
    const cacheKey = `${location.latitude}-${location.longitude}`;

    // Check if data exists in localStorage
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      locationResponses.push(JSON.parse(cachedData));
      continue;
    }

    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
      params: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
      headers: {
        'X-RapidAPI-Key': '5f99e353eemshbd7adf73475b72fp137831jsn0a6358418d31',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    };

    console.log(`Fetching data for location: Latitude ${location.latitude}, Longitude ${location.longitude}`);

    try {
      const response = await axios.request(options);

      const locationData = response.data.data.map(item => ({
        location: locationName,
        name: item.name,
        photoUrl: item.photo?.images?.original?.url || null,
      }));

      locationResponses.push(locationData);

      // Store data in localStorage
      localStorage.setItem(cacheKey, JSON.stringify(locationData));

      console.log(`Data fetched for location: Latitude ${location.latitude}, Longitude ${location.longitude}`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return locationResponses.flat(); // Flatten the array before returning
};

// Fetch data for each location and assign it to a different variable
const kozhikodeData = await fetchDataForLocations(kozhikodeLocations, 'Kozhikode');
const kochiData = await fetchDataForLocations(kochiLocations, 'Kochi');
const bangaloreData = await fetchDataForLocations(bangaloreLocations, 'Bangalore');

// Concatenate all data arrays
const flattenedData = [...kozhikodeData, ...kochiData, ...bangaloreData];

export { flattenedData };
