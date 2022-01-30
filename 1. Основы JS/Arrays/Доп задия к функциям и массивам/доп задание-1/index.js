const question1 = 'Арбуз это фрукт или ягода?',
      question2 = 'Сколько в среднем зубов у взрослого человека?',
      question3 = 'Как называется самая маленькая птица в мире?';
const correctAnswer1 = 'Ягода',
      correctAnswer2 = '32',
      correctAnswer3 = 'Колибри';


function checkQuestionAnswer(question, correctAnswer) {

    const answer = prompt(question).trim();
    if(answer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert('Ответ верный')
    } else {
        alert('Ответ неверный');
    }
}
checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');