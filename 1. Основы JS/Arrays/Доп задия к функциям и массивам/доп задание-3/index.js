const goals = [8, 1, 1, 3, 2, -1, 5];

//======1=====
//Сортируем по убыванию
const maxGoals = goals.sort( (a, b) => {
    return b - a;
});
const searchIndexMaxGoals = goals.findIndex( (item) => {
    return maxGoals[0];
}) 
alert(`Самый результативный матч был под номером ${searchIndexMaxGoals + 1}. В нем было забито ${maxGoals[0]} гол(ов).`);

//======2=====
//Сортируем по возрастанию
const minGoals = goals.sort( (a, b) => {
    return a - b;
});
//сортируем по возрастанию без -1
const minResultMatch = minGoals.filter( (goals) => {
        return goals > 0;
});
//Получаем numberOfGoals - количество голов в самом нерезультативном матче
const numberOfGoals = minResultMatch[0];

let arrNumberOfMinGoals = [];
let searchIndexMin = goals.indexOf(numberOfGoals);
while (searchIndexMin !== -1) {
    arrNumberOfMinGoals.push(searchIndexMin + 1);
    searchIndexMin = goals.indexOf(numberOfGoals, searchIndexMin + 1);
}
console.log(arrNumberOfMinGoals)
// Полученный массив с индексами удовлетворяющих элементов преобразуем в строку
const numberList = arrNumberOfMinGoals.join(' и ')

alert(`Самые нерезультативные матчи были под номерами ${numberList}. В каждом из них было забито по ${numberOfGoals} мячу(а).`)

//======3====
const sumGoalsOfSeason = minResultMatch.reduce( (acc, goals) => {
    return acc + goals;
}, 0);
console.log(sumGoalsOfSeason);
alert(`Общее количество голов за сезон равно ${sumGoalsOfSeason}`);

//======4====
const defeatOfMatches = goals.some( (goals) => {
    return goals === -1;
});
if( defeatOfMatches === true) {
    alert(`Были автоматические поражения: да`);
} else {
    alert(`Были автоматические поражения: нет`);
}

//======5====
const mean = sumGoalsOfSeason / minResultMatch.length;
alert(`Cреднее количество голов за матч равно ${Math.round(mean)}`);

//======6====
// Отсортируйте голы в порядке возрастания и выведите все результаты через запятую в модальном окне alert. Массив goals не должен быть изменен.
const minGoalsList = goals.sort();
alert(minGoalsList);