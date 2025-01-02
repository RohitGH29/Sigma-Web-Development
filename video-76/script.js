// I am going to use async/await to make the code more readable.

console.log('Start....');

// async function getData(){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data received');
//         }, 5000);
//     });
// }

// async function getData() {
//     // simulate getting data from a server
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json();
//     console.log('data:', data);
//     return 12;
    

// }

// async function getData() {
//     const url = "https://jsonplaceholder.typicode.com/todos/1";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
// }
  
// POST request
async function getData() {

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    });
    let data = await x.json();
    return data;

}    



async function main() {
    console.log('Before getData');
    let data = await getData();
    console.log(data);
    console.log('After getData');
    console.log('End....');
}

main();