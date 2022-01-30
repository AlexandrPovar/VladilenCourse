const answer1 = 4;
const answer2 = 4;
const answer3 = 1;
const answer4 = 12;
const answer5= 6;
let correctAnswers = 0; 
let incorrectAnswers = 0;

const question1 = Number(prompt('Сколько будет 2 + 2?'));
    if (question1 === answer1) {
        alert(`Ответ Верный`),
        correctAnswers ++;
    } else {
        alert(`Ответ Неверный`),
        incorrectAnswers ++;
    }

const question2 = Number(prompt('Сколько будет 2 * 2?'));
    if (question2 === answer2) {
        alert(`Ответ Верный`),
        correctAnswers ++;
    } else {
        alert(`Ответ Неверный`),
        incorrectAnswers ++;
    }

const question3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'));
    if (question3 === answer2) {
        alert(`Ответ Верный`),
        correctAnswers ++;
    } else {
        alert(`Ответ Неверный`),
        incorrectAnswers ++;
    }

const question4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'));
    if (question4 === answer4) {
        alert(`Ответ Верный`),
        correctAnswers ++;
    } else {
        alert(`Ответ Неверный`),
        incorrectAnswers ++;
    }

const question5 = Number(prompt('Сколько будет 2 + 2 * 2?'));
if (question5 === answer5) {
    alert(`Ответ Верный`),
    correctAnswers ++;
} else {
    alert(`Ответ Неверный`),
    incorrectAnswers ++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);



      