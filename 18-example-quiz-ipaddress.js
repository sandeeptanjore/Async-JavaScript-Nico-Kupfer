//axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + nameOfCountry);


// Using the ip-api.com service, get the Wikipedia article BASED ON your IP location.
// That means, you need to get the data from ip-api, get the country, and .then() perform a
// request to the Wikipedia article.


const axios = require("axios");

axios.get("http://ip-api.com/json")
  .then((response) => {
    const ipaddressDetails = response.data;
    const countryName = ipaddressDetails.country;

    console.log("IP Details:", ipaddressDetails);
    console.log("Country Name:", countryName);

    // Return the Wikipedia API call for the next .then()
    return axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + countryName);
  })
  .then((wikiResponse) => {
   console.log("Wikipedia Summary:", wikiResponse.data.extract);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
