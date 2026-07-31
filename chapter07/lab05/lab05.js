const callApi = async () => {
    const res = await fetch(`https://localhost:8000/users`);
    const data = await res.json();
    console.log(data);

    //insert data to html
    const tbody = document.querySelector("#users tbody");

    if (data && data.length > 0) {
        data.forEach((user, index) => {
            tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
            `;
        });
    }
}

callApi();