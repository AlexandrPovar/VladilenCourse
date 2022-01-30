const name = 'Alexandr';
console.log(Number(name), Boolean(name), String(name));

const age = 31;
console.log(Number(age), Boolean(age), String(age));

const programming = true;
console.log(Number(programming), Boolean(programming), String(programming));

const studentSurName = null;
console.log(Number(studentSurName), Boolean(studentSurName), String(studentSurName));

let studentWork;
console.log(Number(studentWork), Boolean(studentWork), String(studentWork));

const studentInfo = {
    studentName: 'Alexandr',
    studentAge: 31
};
console.log(Number(studentInfo), Boolean(studentInfo), String(studentInfo));

const id = Symbol('id');
console.log(Number(Symbol), Boolean(Symbol), String(Symbol));

const myFeatureOffer = 1200n;
console.log(Number(myFeatureOffer), Boolean(myFeatureOffer), String(myFeatureOffer));