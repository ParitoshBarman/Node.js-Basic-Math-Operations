github repo:   https://github.com/ParitoshBarman/Node.js-Basic-Math-Operations.git


## Ans:-

`index.js`
```
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
```



`sum.js`
```
function sum(a, b){
    return a+b;
}

module.exports = sum
```


`subtraction.js`

```
function sub(a,b){
    return a-b;
}

module.exports = sub;
```

`multiplication.js`

```
function multiply(a, b){
return a*b;
}

module.exports = multiply;
```

`division.js`

```
function div(a,b){
    return a/b;
}

module.exports = div;
```





`explore_commandLineArgs.js`
```
// code 
const sum = require("./sum");
const multiply = require("./multiplication");
const div = require('./division');
const sub = require('./subtraction');


let args = process.argv.slice(2);
let operation = args[0];
let num1 = parseInt(args[1]);
let num2 = parseInt(args[2]);


switch(operation){
    case 'sum':
        console.log(`Operation: ${operation}, Result: ${sum(num1, num2)}`)
        break;

    case 'sub':
        console.log(`Operation: ${operation}, Result: ${sub(num1, num2)}`)
        break;

    case 'div':
        console.log(`Operation: ${operation}, Result: ${div(num1, num2)}`)
        break;

    case 'mul':
        console.log(`Operation: ${operation}, Result: ${multiply(num1, num2)}`)
        break;

    default:
        console.log('Invalid operation')
        break;
}
```