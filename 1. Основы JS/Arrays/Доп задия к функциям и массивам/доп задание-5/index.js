let array = [];
let lastArray = [];

for (let i = 1; i <= 5; i++) {
    array.push(i);
    for (let i = array; i <= 3; i++) {
        lastArray.push(array);
    }
}
console.log(lastArray);