function getDivisorsCount (number = 1) {

    if (number < 0 || Number.isInteger(number) !== true) {
        alert('number должен быть целым числом и больше нуля!');
        return;
    } else {
        let halfNumber = Math.floor(number / 2);
        let count = 1;
        for (let i = 1; i <= halfNumber; i++) {
            if ( !(number % i))
            ++count;
        }
        return count;
    }
}; 
getDivisorsCount();

console.log(getDivisorsCount(4)); 
console.log(getDivisorsCount(5)); 
console.log(getDivisorsCount(12)); 
console.log(getDivisorsCount(30)); 
