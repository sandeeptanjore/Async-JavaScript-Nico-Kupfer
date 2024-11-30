const axios = require('axios');

// axios
//   .get('https://en.wikipedia.org/api/rest_v1/page/summary/sandn')
//   .then((response) => {
//     console.log(response.data.extract);
//   });

//Your job is to create a new function and extract the data with error if any,by adding catch block

const getWikipediaArticle = async (articleName) => {
  try{
    const details = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + articleName);
    console.log(details.data.extract);
  }catch(error){
    if (error.response){
      console.log("THIS IS A SERVER ERROR: ", error.response);
    }else{
      console.log("THIS IS AN OTHER ERROR: ", error);
    }
  }
};

//getWikipediaArticle('Udemyeesdsd');
getWikipediaArticle("Liverpool");
console.log(" ");
getWikipediaArticle("University of Liverpool");

