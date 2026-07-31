console.log(`video66`);

//promise

fetch(`https://localhost:8000/users`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

//async await

const fetchApi = async () => {
    const res = await fetch(`https://localhost:8000/users`);
    const data = await res.json();
    console.log(data);
}
fetchApi();