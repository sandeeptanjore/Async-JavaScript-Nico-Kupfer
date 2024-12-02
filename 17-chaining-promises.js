const axios = require("axios");

let randomUser, nameOfCountry;

axios.get("http://randomuser.me/api").then((response)=>{
     randomUser= response.data.results[0];
     return randomUser;
  }).then((user)=>{
    nameOfCountry= user.location.country;
   return nameOfCountry;
   //user.location.country
  }).then((nameOfCountry)=>{
    return axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + nameOfCountry);
  }).then((result) =>{
    return result.data.extract
  }).then((extract)=>{
    console.log("Extract for random country", extract);
  }).catch((error=>{
    console.log("Our code failed");
  }));


