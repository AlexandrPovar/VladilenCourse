function getSumOfSequence(number) {
    const arr = [];

    for( i = 1; i <= number; i++) {
        arr.push(i);
    }

    return  arr.length + 1;
    // return  arr.length + arr[0];
};

console.log(getSumOfSequence(5));
