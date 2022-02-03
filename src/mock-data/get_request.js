const axios = require('axios');


axios.get('http://localhost:3000/hits')
    .then(resp => {
        const data = resp.data;
        console.log(data);
        data.forEach(e => {
            console.log(`${e.title}, ${e.url}, ${e.author}`);
        });
    })
    .catch(error => {
        console.log(error);
    });