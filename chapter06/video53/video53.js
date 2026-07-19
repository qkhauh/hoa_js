const mybtn = document.getElementById("nutbam");
const mychuoi = document.getElementById("chuoi");
const mybtntd = document.getElementById("nutbamd");

mybtn.addEventListener("click", () => {
    console.log("bam lam cc gi");
    mychuoi.style.color = "blue";
    mychuoi.style.backgroundColor = "black";
    mychuoi.classList.add("adudu", "djtcme");
    mychuoi.innerHTML = "bam lam cc gi";
})

mybtn.addEventListener("click", () => {
    console.log("bam lam cc gi");
    mychuoi.style.fontSize = "100px";
    mychuoi.style.color = "red";
    mychuoi.style.backgroundColor = "black";
    mychuoi.innerHTML = "video53";
})
