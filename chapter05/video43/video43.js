console.log("video 43")

const my = {
    name: "cauphen",
    age: "25"
}

// get data
console.log(`my: ${my}`)
console.log(`name : ${my.name}`)
console.log(`age : ${my.age}`)

// set data
my.address = "angiang";
my["language"] = "vietnamese";

console.log(`my after : ${my}`)

delete my.address
console.log(`my after : ${my}`)

