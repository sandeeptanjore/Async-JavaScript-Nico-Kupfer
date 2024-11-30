const axios = require("axios");

//This is still with Async and Await. Not with promise.all

const getWikipediaArticle = async (articleName1, articleName2) => {
    try{
    const promise1 =axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + articleName1);
    const promise2 =axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + articleName2);

    const response1 = await promise1;
    const response2 = await promise2;
    console.log(response1.data.extract);
        console.log(" ----- ");
    console.log(response2.data.extract);
    }catch(error){

    }
};

getWikipediaArticle("Moscow", "Berlin");
getWikipediaArticle("SFO", "dxb");

