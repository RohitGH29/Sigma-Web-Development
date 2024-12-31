// I am going to create a Factorial function using the reduce function, take input from user and calculate the factorial of the number
let num = 6
// let num = prompt("Enter a number: ");
let arr = [];
for (let i = 1; i <= num; i++) {
    arr.push(i);
}
console.log(arr);

const red = (a, b) => {
    return a * b;
}

console.log("using reduce function", arr.reduce(red));

// Now use For loop to calculate the factorial of the number
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log("Using For loop", fact);

// using reduce function with array create using array.from
function factorial(n) {
   let array = Array.from(Array(n+1).keys());
   let c = array.slice(1,).reduce((a,b) => a*b);
   console.log(array.slice(1,)); // [1,2,3,4,5,6]
   return c;
}

console.log(factorial(6));


