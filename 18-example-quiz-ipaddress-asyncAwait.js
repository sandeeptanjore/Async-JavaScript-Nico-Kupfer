const axios = require('axios');

const getCityDetails = async () => {
  try {
    //Let's first find the ip address of where I live
    const ipaddress = await axios.get('http://ip-api.com/json');
    //Then based on the ip address let's find the city details of where I live
    const cityDetails = await axios.get(
      'https://en.wikipedia.org/api/rest_v1/page/summary/' + ipaddress.data.city
    );

    console.log(
      `You live in ${ipaddress.data.city}. Your ISP is ${ipaddress.data.isp} and the ipaddress is: ${ipaddress.data.query}`
    );

    console.log(' ');
    console.log('Some details about your city:');
    console.log('============================');
    console.log(cityDetails.data.extract);
  } catch (error) {
    console.log('GOTCHA!', error.message);
  }
};

getCityDetails();
