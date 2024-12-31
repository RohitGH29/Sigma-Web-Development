// Here we are going to learn about the map, filter and reduce functions in javascript

let arr = [1,13,12,14,15,16,17,18,19,20];

let newArr = arr.map(e => { // map function is used to iterate over the array and return a new array with the same length
   return e**2
});

console.log(newArr);

const greaterThenSeven = (e) => { // arrow function is used to define the function in javascript 
    if (e > 7) {
        return true;
    }
    return false;
}

console.log(newArr.filter(greaterThenSeven)); // filter function is used to filter out the elements from the array based on the condition

let arr2 = [1,2,3,4,5,6,7,8,9,10];

const red = (a,b) => {
    return a+b;
}

console.log(arr2.reduce(red)); // reduce function is used to reduce the array to a single value