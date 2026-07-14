const myClass = ["hoidanit", "eric", "hung", "nam", "bla bla"]

console.log(myClass, myClass.length)

for (let i = 0; i < myClass.length; i++) {
    console.log(`${i} = ${myClass[i]}`);
}

//for - each
myClass.forEach(function (value, index) {
    console.log(`index ${index} = value ${value}`);
})

myClass.forEach((value, index) => {
    console.log(`arrow index ${index} = value ${value}`);
})