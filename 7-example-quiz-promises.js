const axios = require("axios");
axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/Paris")
     .then((response)=>{
      console.log(response.data.extract);
      console.log(response.data.extract_html);
     })
     .catch((error) =>{
      console.error("Error fetching data:", error.message); // Handles errors
     });

//Quiz:

axios.get("https://ip-api.com/json")
.then((response) =>{
  console.log(response.data);
})
.catch((error)=>{
  console.error("Error fetching data:", error.message); // Handles errors
})
