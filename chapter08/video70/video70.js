console.log(`video 70`);

const savebtn = document.getElementById("btnsave");
const nametodo = document.getElementById("name");

function getrandomint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (savebtn) {
    savebtn.addEventListener('click', () => {
        const mytodo = {
            id: getrandomint(1, 1000000), name: nametodo.value
        }
        const currtodostr = localStorage.getItem("todo");

        if (currtodostr) {
            const currtodo = JSON.parse(currtodostr);

            currtodo.push(mytodo)
            localStorage.setItem("todo", JSON.stringify(currtodo));
        } else {
            localStorage.setItem("todo", JSON.stringify([mytodo]));
        }

        window.location.href = "video70.html";
    })
}

const generatetodotable = () => {
    const todoliststr = localStorage.getItem("todo");
    if (todoliststr) {
        const todolist = JSON.parse(todoliststr);
        console.log(todolist);


        const tbody = document.querySelector("#todolist tbody");

        if (todolist && todolist.length) {
            todolist.forEach((todo, index) => {
                tbody.innerHTML += `
                   <tr>
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td><button data-id="${todo.id}" class="btn-delete">Xoa</button></td>
                   </tr>
                `;
            });
        }
    }
}


generatetodotable();

const deletebtn = document.querySelectorAll(".btn-delete");
if (deletebtn) {
    deletebtn.forEach((btn, index) => {
        console.log(btn, index)
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            handdelete(id);
        })
    })
}

const handdelete = (id) => {
    const currtodostr = localStorage.getItem("todo");
    if (currtodostr) {
        const currtodo = JSON.parse(currtodostr);
        const newtodo = currtodo.filter((todo, index) => todo.id + "" !== id);

        localStorage.setItem("todo", JSON.stringify(newtodo));

        window.location.href = "video70.html";
    }
}