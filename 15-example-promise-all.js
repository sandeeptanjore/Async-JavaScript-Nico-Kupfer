const axios = require("axios");

//This is with Promise.all

const getWikipediaArticle = (articleName1,articleName2) =>{
    Promise.all([axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + articleName1),
        axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + articleName2)

    ]).then(([response1,response2])=>{
        console.log(response1.data.extract);
        console.log('***********');
        console.log(response2.data.extract);
        console.log('***********');
    }).catch(error=>{
            //ignore it for now
    })
};

getWikipediaArticle("Toronto", "Edmonton");
getWikipediaArticle("West Edmonton Mall", "Hyderabad");