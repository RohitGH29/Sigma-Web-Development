// JavaScript - Selecting by Ids, Classes, and More 

// Selecting by Ids, Classes, and More

// select by class
// The getElementsByClassName() method is used to select elements with a specific class attribute. It returns a collection of elements as an object (element object).
let boxes = document.getElementsByClassName('box');
boxes[2].style.backgroundColor = 'blue';

// Selecting by Ids
// The getElementById() method is used to select an element with a specific id attribute. It returns the element as an object (element object).

// Syntax:
// document.getElementById(id)
let redBox = document.getElementById('red-box');
redBox.style.backgroundColor = 'red';

// Selecting by queerySelector
let box = document.querySelector('.box');   // selects the first element with the class name 'box'
box.style.backgroundColor = 'green';

// Selecting by queerySelectorAll
let allBoxes = document.querySelectorAll('.box');   // selects all elements with the class name 'box'

allBoxes.forEach(box => {
    box.style.backgroundColor = 'yellow';
})

// Selecting by Tag Name
let divs = document.getElementsByTagName('div');
console.log(divs);

// Matches 
console.log(divs[3].matches("#red-box")); // true

// closest
console.log(divs[3].closest(".container")); // null

// contains 
console.log(divs[3].contains(divs[4])); // false