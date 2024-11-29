const axios = require('axios');

axios
  .get('https://en.wikipedia.org/api/rest_v1/page/summary/sandn')
  .then((response) => {
    console.log(response.data.extract);
  });

//Your job is to create a new function and extract the data with error if any,by adding catch block

const getWikipediaArticle = (articleName) => {};
