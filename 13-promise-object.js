const axios = require("axios");

//Promise.all => accepts array of promises

login().then((userId)=>{
    Promise.all([getSettings(userId), getContacts(userId),getPosts(userId)])
        .then(([settingsResponse,contactsResponse,postsResponse]) =>{
            

    })
})

const [name,age] = ["John", 33]
console.log(name,age);