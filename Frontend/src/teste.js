const axios = require('axios');

const dados = {
    id: 11,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232"
        }
    }
}

axios.post('https://jsonplaceholder.typicode.com/users', dados)
.then((response) => {
    console.log(response.data);
});

