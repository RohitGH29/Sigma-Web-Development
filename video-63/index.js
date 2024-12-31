let arr = [1, 2, 3, 4, 5];

console.log(arr);          // [ 1, 2, 3, 4, 5 ]
console.log(arr.length);    // 5
console.log(arr.toString()); // 1,2,3,4,5  
console.log(arr.join(" and ")); // 1 and 2 and 3 and 4 and 5 
console.log(arr.pop()); // 5 
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr.push("Rohit")); // Rohit
console.log(arr); // [ 1, 2, 3, 4, 'Rohit ]
console.log(arr.shift()); // remove from the beginning
console.log(arr); // [ 2, 3, 4, 5 ]
console.log(arr.unshift("Rohit")); // add at the beginning
console.log(arr); // [ Rohit, 2, 3, 4, 'Rohit' ]
console.log(delete arr[1]); // true
console.log(arr); // [ Rohit, <1 empty item>, 3, 4, 'Rohit' ] it will not remove the index but it will make it empty, memory will not be freed
console.log(arr.splice(2, 1)); // [ 3 ]
console.log(arr); // [ Rohit, <1 empty item>, 4, 'Rohit' ]
console.log(arr.splice(2, 1, 'new', 'new1')); // it adds new elements at the index 2 and removes 1 element
console.log(arr); // [ Rohit, <1 empty item>, 'new', 'new1', 'Rohit' ]
console.log(arr.slice(1, 3)); // [ <1 empty item>, 'new' ] it will not modify the original array, it includes the start index and excludes the end index