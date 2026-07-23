console.log("1");

setTimeout(() => {
    console.log("2");
}, 5000)

console.log("3");

const myp = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            resolve("dcmm mat day")
        }, 5000)
    })
}

const test = myp();
console.log(test);

myp().then(data => console.log(data))