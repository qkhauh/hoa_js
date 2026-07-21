console.log("video 55");

const btn = document.getElementById("sumbtn");
const input = document.getElementById("name");

const tin = document.getElementById("tin");
const prev = document.getElementById("tengicungdc");
if (prev) {
    tin.innerHTML = `<b>${prev}</b>`
}


btn.addEventListener("click", () => {
    console.log(input.value);
    localStorage.setItem("tengicungdc", input.value);
    tin.innerHTML = `<b>${input.value}</b>`;
})

prev.innerHTML = localStorage.getItem("gicungdc");
