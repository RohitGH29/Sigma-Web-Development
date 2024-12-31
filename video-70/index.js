// Given 5 boxes, Assign a random color & background color to each box using DOM concepts.

let boxes = document.getElementsByClassName('box');
console.log(boxes);
console.log(boxes.length);

function getRandomColor(){
    let var1 = Math.ceil(0 + Math.random() * 255);
    let var2 = Math.ceil(0 + Math.random() * 255);
    let var3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${var1}, ${var2}, ${var3})`;
}

Array.from(boxes).forEach((box) => {
    box.style.color = getRandomColor();
    box.style.backgroundColor = getRandomColor();
})


// let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// console.log(colors.length);
// let backgroundColors = ['red', 'green', 'blue', 'yellow', 'orange'];

// for (let i = 0; i < boxes.length; i++) {
//   let randomColor = Math.floor(Math.random() * colors.length);
//   let randomBackgroundColor = Math.floor(Math.random() * backgroundColors.length);
//   boxes[i].style.color = colors[randomColor];
//   boxes[i].style.backgroundColor = backgroundColors[randomBackgroundColor];
// }

// console.log(Math.random());
// console.log(Math.random() * colors.length);
// console.log(Math.floor(Math.random() * colors.length)); 
