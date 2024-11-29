const axios = require('axios');
// axios
//   .get('https://randomuseandeepr.me/api')
//   .then((response) => {
//     console.log(response.data.someProperty.myValue);
//   })
//   .catch((error) => {
//     if (error.response) {
//       console.log('SERVER', error.response);
//     } else {
//       console.log('OTHER', error);
//     }
//   });

async function getRandomUser() {
  try {
    const userDetails = await axios.get('https://randomuser.me/api');
    // console.log(userDetails.data.someProperty.myValue);
    console.log(userDetails.data.results[0]);
  } catch (error) {
    if (error.response) {
      console.log('SERVER', error.response);
    } else {
      console.log('OTHER', error);
    }
  }
}

getRandomUser();
