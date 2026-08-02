console.log(`video 70`);

const savebtn = document.getElementById("btnsave");
const nametodo = document.getElementById("name");

savebtn.addEventListener('click', () => {
    const mytodo = {
        id: 1, name: nametodo.value
    }
    const currtodostr = localStorage.getItem("todo");

    if (currtodostr) {
        const currtodo = JSON.parse(currtodostr);

        currtodo.push(mytodo)
        localStorage.setItem("todo", JSON.stringify([currtodo]));

    } else {
        localStorage.setItem("todo", JSON.stringify([mytodo]));
    }
})
