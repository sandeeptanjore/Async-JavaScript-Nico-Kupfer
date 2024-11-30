const axios = require('axios');

const randomTourist = async (placeName) => {
  try {
    // Fetch data concurrently
    const [placeResponse, userResponse] = await Promise.all([
      axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${placeName}`
      ),
      axios.get(`https://randomuser.me/api?seed=${placeName}`),
    ]);

    // Extract information
    const placeDescription = placeResponse.data.extract;
    const user = userResponse.data.results[0];
    const userName = `${user.name.first} `;
    const userCountry = user.location.country;

    // Format the result
    console.log(
      `${userName} from ${userCountry} went to ${placeName}: ${placeDescription}`
    );
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the function with a place name
// randomTourist('Barcelona');
randomTourist('London');
