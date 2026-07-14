const csores = [10, 8, 3, 7, 5];

csores.forEach((element, index) => {
    console.log(`score ${element} is at index ${index}`)
})

const scorenhan2 = csores.map((element, index) => {
    return element * 2;
})
console.log("score = ", score);
console.log("scorenhan2 = ", scorenhan2);
