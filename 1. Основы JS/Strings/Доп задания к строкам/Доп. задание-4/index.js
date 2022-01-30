const userParol = prompt('Введите пароль');

const parolToLowerCace = userParol.toLowerCase();
for( let i = 0; i < userParol.length; i++) {
    console.log(userParol[i]);
    console.log(Number(userParol[i]));
    if(Number(userParol[i]) !== NaN) {
        invalidParol()
    }   
}
    
    if (userParol.length <= 3 || userParol.length >= 20) {
        invalidParol();
    } else if (parolToLowerCace === userParol) {
        invalidParol();
    } else {
        validParol();
    }

function invalidParol() {
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');
    return;
}

function validParol() {
    alert('Пароль валидный. Добро пожаловать в аккаунт!');
}