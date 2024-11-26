const axios = require("axios");

async function getCitySummary(city) {
 const cityDetails = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + city)
 console.log(cityDetails.data.extract);
 console.log("");
};




const getCountrySummary= async (country)=>{
 const countryDetails = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + country);
 console.log(countryDetails.data.extract);
 console.log("");

};

getCountrySummary("Canada");
getCitySummary("Ottawa");
getCitySummary("Vancouver");

//Quiz 

async function getUser(){
  const response = await axios.get("https://randomuser.me/api");
  console.log("First name is: " + response.data.results[0].name.first +
    " and email id is: " + response.data.results[0].email
  );
};

getUser()