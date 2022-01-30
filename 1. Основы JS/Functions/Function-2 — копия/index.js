

function getSumOfNumbers (number, type = '') {
  
  let sum = 0;

    for (let i = 1; i <= number; i++) {
        if  ( ((i % 2) == 0) && (type === 'even') ) {
            sum += i;
        } else if( (type === 'odd') && ( (i % 2) == 1 ) ) {
            sum += i;
        } 
        if  ((type != 'even') && (type != 'odd')) {
                    sum += i;
        }
    }
    return sum;

}
let result = getSumOfNumbers(10, '';)
console.log(getSumOfNumbers( 10, 'even'));

//======Вариант учащегося
//========================
// function getSumOfNumbers(number, type = '') {
//   let sum = 0;
//   console.time("label");
//   for (let i = 1; i <= number; i += 1) {
//       if (((i % 2) == 0) && (type === 'even')) {
//           sum = sum + i;
//       } else if (((i % 2) == 1) && (type === 'odd')) {
//           sum += i;
//       } 
      
//       if  ((type != 'even') && (type != 'odd')) {
//           sum += i;
//       } 
// } 
// console.timeEnd("label");
// return sum;
// } 

// let result = getSumOfNumbers(10, '');

// console.log(result);



//======Вариант из сети
//========================
// const getSumOfNumbers = (number, type = "odd") => {
//     switch (type) {
//         case "odd":
//         case "even":
//             let sum = 0;
//             for (let i = (type === "odd" ? 2 : 1); i <= number; i += 2)
//                 sum += i;
//             return sum;
//         case "": return (1 + number) * number / 2;
//         default: throw new RangeError("Invalid second argument");
//     }
// }`b 



//======Вариант из сети 2
//========================
// function getSumOfNumbers(number, type = "even") {
//     let sum = 0;
//     const initial = (type == "odd"),
//       step = 2 - (type == "");
//     for (let n = initial; n <= number; n += step) {
//       sum += n;
//     }
//     return sum;
//   }

// console.log(getSumOfNumbers(10, "odd")); //?.  
// console.log(getSumOfNumbers(10, "even"));
// console.log(getSumOfNumbers(10, ""));



