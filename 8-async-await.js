const axios = require("axios");

//async/await

const getUser = (async () =>{
  const response = await axios.get("https://randomuser.me/api");
  //console.log(response.data.results[0].name.first);
  console.log(response.data.results[0].name.first, response.data.results[0].email);
  // console.log(response.data.results[0].email);
});

getUser()