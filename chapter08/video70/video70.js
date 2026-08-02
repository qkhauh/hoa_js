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