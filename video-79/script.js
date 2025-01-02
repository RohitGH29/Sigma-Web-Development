let a = prompt('Enter a number');

let b = prompt('Enter another number');

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError('Please enter a valid number');
}
 
let sum = parseInt(a) + parseInt(b);


try {
    console.log(`The sum of ${a} and ${b} is ${sum} * ${x}`);
    
} catch (error) {
    console.log('An error occurred');
    
}