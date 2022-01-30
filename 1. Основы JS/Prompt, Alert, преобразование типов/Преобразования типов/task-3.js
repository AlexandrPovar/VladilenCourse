//1  console.log
console.log(Number(console.log), Boolean(console.log), String(console.log));
//2  { name: 'Maxim' }
console.log(Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }), String({ name: 'Maxim' }));
//3  Symbol('key')
console.log(Number('key'), Boolean(Symbol('key')), String(Symbol('key')));
//4  Number
console.log(Number(Number), Boolean(Number), String(Number));
//5  ''
console.log(Number(''), Boolean(''), String(''));
//6  0
console.log(Number(0), Boolean(0), String(0));
//7  -10
console.log(Number(-10), Boolean(-10), String(-10));
//8  '-105'
console.log(Number('-105'), Boolean('-105'), String('-105'));