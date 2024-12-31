// Inserting and Removing Elements using JavaScript DOM Concepts 
 
let element = document.querySelector('.container')

// innerHTML example:
console.log("innerHTML: ",element.innerHTML = "s" ) 

// innerText example: 
console.log("innerText: ",element.innerText = "Hello World")

// outerHTML example:
console.log("outerHTML: ",element.outerHTML )

// outer example:
console.log("outer: ",element.outer)

// tagName example:
console.log("tagName" , element.tagName)

// nodeName example:
console.log("nodeName: ",element.nodeName)

// textContent example:
console.log("textContent:" ,element.textContent)

// hidden example:
console.log("hidden: ",element.hidden)

// document.designMode = 'on' example:

// create a element
let div = document.createElement('div')
div.innerHTML = '<b> This is a created element</b>'
div.setAttribute('class', 'created')
element.appendChild(div)

// classList example:
console.log("classList: ",element.classList)

// classList.add example:
element.classList.add('created')

// classList.remove example:
element.classList.remove('bb')

// className example:
console.log("className: ",element.className)

// toggle example:
// console.log("toggle: ",element.classList.toggle('a'))