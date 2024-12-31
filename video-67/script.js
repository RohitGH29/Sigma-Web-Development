// going to learn JSDom Children, Parent, Sibling, and Traversing

// Children
const result = document.querySelectorAll('.box'); // get the element with class result from the DOM and store it in result variable 
console.log(result); // log result to the console
const allChildren = result.children; // get all the children of the result element and store it in allChildren variable
console.log(allChildren); // log allChildren to the console 

// firstChild
const firstChild = result.firstChild; // get the first child of the result element and store it in firstChild variable
console.log(firstChild); // log firstChild to the console

// lastChild
const lastChild = result.lastChild; // get the last child of the result element and store it in lastChild variable
console.log(lastChild); // log lastChild to the console

// childNodes
const childNodes = result.childNodes; // get all the child nodes of the result element and store it in childNodes variable
console.log(childNodes); // log childNodes to the console

// Parent
const parent = result.parentNode; // get the parent node of the result element and store it in parent variable
console.log(parent); // log parent to the console

// Sibling
const sibling = result.nextSibling; // get the next sibling of the result element and store it in sibling variable
console.log(sibling); // log sibling to the console

// NextElementSibling
const nextElementSibling = result.nextElementSibling; // get the next element sibling of the result element and store it in nextElementSibling variable
console.log(nextElementSibling); // log nextElementSibling to the console

// Table links
const table = document.body.children[1] // get the second child of the body element and store it in table variable
const tbody = table.children
console.log(table); // log table to the console
console.log(table.rows); // log the rows of the table to the console 
console.log(table.caption); // log the caption of the table to the console
console.log(table.thead); // log the thead of the table to the console
console.log(table.tBodies); // log the tBodies of the table to the console
console.log(table.tFoot); // log the tFoot of the table to the console
console.log(tbody.rows); // log the rows of the tbody to the console