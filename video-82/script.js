async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    });
}

// let creat IIFE function
(async function(){
    // let a = await sleep();
    // let b = await sleep();
    // console.log(a, b);

    let [a,b, ...c] = [1,5,3,2,4,5]
    console.log(a, b,c);

})();


const obj = {
    a: 1,
    b: 2,
}

let {a, b} = obj;
console.log(a, b);

// spread operator

function sum(a, b, c){
    return a + b + c;
}

let arr = [1,2,3];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr));

