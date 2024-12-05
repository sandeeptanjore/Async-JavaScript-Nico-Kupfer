const axios = require('axios');

async function getCitySummary(city) {
  try {
    console.log('Before async await');
    setTimeout(async () => {
      const cityDetails = await axios.get(
        'https://en.wikipedia.org/api/rest_v1/page/summary/' + city
      );
      console.log(cityDetails.data.extract);
      console.log('');
      console.log('After async await');
    }, 20000);

    console.log('After create time out');
  } catch (error) {
    console.log('GOTCHA!', error.message);
  }
}

const getCountrySummary = async (country) => {
  const countryDetails = await axios.get(
    'https://en.wikipedia.org/api/rest_v1/page/summary/' + country
  );
  console.log(country + ': ' + 'A, ' + countryDetails.data.description);
  console.log('');
  console.log(countryDetails.data.extract);
  console.log('');
};

getCountrySummary('India');
getCitySummary('New Delhi');
