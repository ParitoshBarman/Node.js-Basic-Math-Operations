const sum = require("./sum");
const multiply = require("./multiplication");
const div = require('./division');
const sub = require('./subtraction');

let sumA = 3;
let sumB = 5;
let sumResult = sum(sumA, sumB);
console.log(sumResult);

let mulA = 4;
let mulB = 6;
let mulResult = multiply(mulA, mulB);
console.log(mulResult);

let divA = 4;
let divB = 6;
let divResult = div(divA, divB);
console.log(divResult);

let subA = 4;
let subB = 6;
let subResult = sub(subA, subB);
console.log(subResult);