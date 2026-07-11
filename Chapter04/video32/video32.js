const sum = (a, b, c) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        console.log(`day dell phai number`);
        return;
    }
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
    return a + b + c;
}
console.log(sum(3, 6, 9));