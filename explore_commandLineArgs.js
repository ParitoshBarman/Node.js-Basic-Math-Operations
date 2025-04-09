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