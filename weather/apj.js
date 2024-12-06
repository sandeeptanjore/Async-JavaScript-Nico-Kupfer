// // you can make it async if you want.
// function fetchData() {
//   let placeName; // Name of the place where you live. It will be shown in the weather widget.
//   const locationAPI = 'http://ip-api.com/json?fields=countryCode,city,lat,lon&lang=de';
//   const wikipediaAPI = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + 'PLACE_NAME???';
//   const weatherAPI = 'https://api.openweathermap.org/data/2.5/onecall?lat=<LATITUDE???>&lon=<LONGITUDE???>&appid=ec6731a7e08dc09dab2c617166cab786'
//   /*
//      you can use `axios.get(....)`
//      then you do all the logic...
//      and you return the following structure:
//      .then((...) => {
//         return {
//             place: <NAME OF YOUR PLACE, IN LOCAL LANGUAGE PROBABLY BEST>
//             weather: <RESPONSE FROM WEATHER API>,
//             wikipedia: <RESPONSE FROM WIKIPEDIA API>
//         }
//     });
//     */
// }
const axios = require('axios');

const fetchData = async () => {
  let placeName;
  try {
    const locationAPI = await axios.get(
      'http://ip-api.com/json?fields=countryCode,city,lat,lon&lang=en'
    );

    // const wikipediaAPI = await axios.get(
    //   'https://en.wikipedia.org/api/rest_v1/page/summary/' +
    //     locationAPI.data.city
    // );

    const wikipediaAPI = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        locationAPI.data.city
      )}`
    );

    const weatherAPI = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${locationAPI.data.lat}&lon=${locationAPI.data.lon}
      &appid=a9808ea0fa9fbcec1b3e078ed8090bb9`
    );
    console.log(locationAPI.data.countryCode);
    console.log(locationAPI.data.city);
    console.log(locationAPI.data.lat);
    console.log(locationAPI.data.lon);

    console.log(weatherAPI.data.current);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    if (error.response) {
      console.error('Error Status:', error.response.status);
      console.error('Error Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }
  }
};

fetchData();
