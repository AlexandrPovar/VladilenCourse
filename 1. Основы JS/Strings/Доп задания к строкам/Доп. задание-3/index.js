const clientName = prompt('Введите имя клиента').trim();
let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'));
let clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?'));

if (false || clientSpentToday || clientSpentForAllTime === Number()) {
    if (clientSpentForAllTime < 100) {
        alert(`У Вас, к сожалению, пока нет скидки!`);
        finalAlert();
    } else if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
        let discount = 10;
        alert(`Вам предоставляется скидка в ${discount}%!`);
        clientSpentToday -= clientSpentToday * discount / 100; 
        clientSpentForAllTime += clientSpentToday;
        finalAlert();
    } else if (clientSpentForAllTime > 300 && clientSpentForAllTime < 500) {
        let discount = 20;
        alert(`Вам предоставляется скидка в ${discount}%!`);
        clientSpentToday -= clientSpentToday * discount / 100; 
        clientSpentForAllTime += clientSpentToday;
        finalAlert();
    } else if (clientSpentForAllTime > 500) {
        let discount = 30;
        alert(`Вам предоставляется скидка в ${discount}%!`);
        clientSpentToday -= clientSpentToday * discount / 100; 
        clientSpentForAllTime += clientSpentToday;
        finalAlert();
    }
} else {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
}
function finalAlert() {
    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
    }
