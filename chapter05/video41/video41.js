console.log("video 41");

const ages = [10, 20, 30, 25, 12, 19];

const agesx2 = ages.map((item, index, arr) => {
    return item * 2;
})

const agestren18 = ages.filter((item, index, arr) => {
    return item >= 18;
})

// const agestren18

console.log(`Original: ${ages}`);
console.log(`Agesx2: ${agesx2}`);
console.log(`Ages tren 18: ${agestren18}`);

