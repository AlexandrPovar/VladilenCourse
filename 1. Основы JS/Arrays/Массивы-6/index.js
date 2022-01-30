const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

//=========for=====
for( i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 3;
}
console.log(sum);

//=========forOf=====
for( const item of numbers) {
    sum += item ** 3;
}
console.log(sum);

//=========ForEach
const sum3 = numbers.forEach( (item) => {
    sum += item ** 3;
});
console.log(sum);

//=========Reduce===
const sumReduce = numbers.reduce( (acc, item) => {
    return  acc + (item ** 3);
}, 0);
console.log(sumReduce)