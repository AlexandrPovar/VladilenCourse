let clientsEstimations = [];

function askClientToGiveEstimation() {

    const rating = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    if ( rating >= 1 && rating <=10) {
        clientsEstimations.push(rating);
    } else {
        return;
    }
}

for( i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter( (item) => {
    return item > 5;
});

const notGoodEstimations = clientsEstimations.filter( (item) => {
    return item <= 5;
});

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);