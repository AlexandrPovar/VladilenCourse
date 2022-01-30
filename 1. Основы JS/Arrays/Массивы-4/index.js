const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

let updatedPrices = prices.map( (price) => {
    return price + 0.5;
});

coffees.forEach( (cofee, index) => {
    alert(`Кофе ${cofee} сейчас стоит ${updatedPrices[index]} евро`);
});