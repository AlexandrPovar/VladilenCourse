let totalSumOfNumbers = 0;
let sum = 0;

function getSumOfNumbers (number = 0, type = 'odd') {

    if (type === 'even') {
        for (let i = 0; i < number; i++) {
            if  ( (i + 1) % 2 == 0) {
                totalSumOfNumbers += i + 1;
            }
        }

    } else if(type === 'odd') {
        for (let i = 0; i < number; i++) {
            if  ( (i + 1) % 2 !== 0) {
                totalSumOfNumbers += (i + 1);
            }
        }
    } else {
        for (let i = 0; i < number; i++) {
                totalSumOfNumbers +=  (i + 1) ;
            }
         }
    }

const result = getSumOfNumbers( 10, 'even');
console.log(totalSumOfNumbers);
