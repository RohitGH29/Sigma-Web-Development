let button = document.getElementById('btn');
let doubleButton = document.getElementById('dblbtn');
// click event
button.addEventListener('click', () => {
//    alert('Button clicked');
   document.querySelector('.box').innerHTML = 'Button clicked'; 
});

// double click event
doubleButton.addEventListener('dblclick', () => {
    document.querySelector('.box').innerHTML = 'Button double clicked';
});

// contextmenu event
button.addEventListener('contextmenu', (e) => {
    alert('Button right clicked');
});

// keydown event
document.addEventListener('keydown', (e) => {
    console.log(e.key);
});