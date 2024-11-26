const axios = require("axios");

// axios.get("https://randomuser.me/api")
//   .then((response) => {
//     console.log(response.data); // Logs the API's response data
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error.message); // Handles errors
//   });


  axios.get("https://randomuser.me/api").then((response)=>{
    console.log(response.data.results[0].email);
  }).catch((error)=>{
    console.log(error.message);
  })