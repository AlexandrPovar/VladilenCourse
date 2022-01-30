function getName1(name = 'Oleg') {
    return `Имя равно ${name}`;
}
console.log(getName1());

const getName2 = function(name = 'Alex') {
    console.log(`Имя равно ${name}`);
}
getName2();

const getName3 = (name = 'Dima') => console.log(`Имя равно ${name}`);
getName3();


