let a = [1, 2, 3, 4, 5];

for (let i = 0; i < a.length; i++) { // for loop is used when we know the number of iterations we want to do  
    const element = a[i];
    console.log(element);
}

a.forEach((value, index, arr) => { // forEach is used when we want to iterate over the array and we don't know the number of iterations)
    console.log(value, index, arr);
});

// object data structure 
let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) { // for in loop is used to iterate over the object properties 
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; // obj[key] is used to get the value of the property
        console.log(key ,element); // key is the property name and element is the value of the property
        
    }
}


for (const element of a) { // for of loop is used to iterate over the array and we don't know the number of iterations
    console.log(element);
    
}