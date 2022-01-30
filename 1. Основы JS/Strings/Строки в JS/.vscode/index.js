const myName = 'Александр';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Максим';
const reasonText = 'мне это нравится, это перспективно и интересно';
const numberOfMonth = '1,5';


let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцa. Я уверен, что пройду данный курс до конца!`;

newInfoText = myInfoText.replaceAll('JavaScript', programmingLanguage.toUpperCase());
console.log(newInfoText);
console.log('длина строки newInfoText:', newInfoText.length);
console.log('первый символ строки newInfoText:', newInfoText[0]);
console.log('последний символ строки newInfoText:', newInfoText[newInfoText.length - 1]);