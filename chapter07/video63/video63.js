//fetch api

const temp = fetch('https://localhost:8000/users');

temp
    .then(data => data.json())
    .then(d => console.log(d));
