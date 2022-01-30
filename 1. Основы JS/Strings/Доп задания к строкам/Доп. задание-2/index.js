const clientName = 'Игорь';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;

if (clientSpentForAllTime < 100) {
    let discount = 0;
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

function finalAlert() {
    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
    }