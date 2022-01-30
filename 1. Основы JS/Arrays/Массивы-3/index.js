const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = prompt('Поиск кофе по названию:').trim().toLowerCase();

let newArrCoffees = coffees.map( (coffee) => {
    return coffee.toLowerCase();
});

let searchIndexCoffeeName = newArrCoffees.findIndex( (coffee) => {
    return coffee === coffeeName;
    });

if (searchIndexCoffeeName !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[searchIndexCoffeeName]}. Он ${searchIndexCoffeeName + 1}-й по популярности в нашей кофейне.`)
} else {
    alert('К сожалению, такого вида кофе нет в наличии.')
}

  


