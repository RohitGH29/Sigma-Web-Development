console.log('Start....');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject('Promise 1 rejected');
    }
    else {
        setTimeout(() => {
            console.log('I am promise 1');
            resolve('Promise 1 resolved');
        }, 2000);
    }
});

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject('Promise 2 rejected');
    }
    else {
        setTimeout(() => {
            console.log('I am promise 2');
            resolve('Promise 2 resolved');
        }, 2000);
    }
});

// Promise.all takes an array of promises and returns a single promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises.
// let p = Promise.all([prom1, prom2]);
// p.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// // Promise.allSettled takes an array of promises and returns a single promise that resolves when all of the promises in the iterable argument have resolved or rejected, with an array of objects that each describe the outcome of each promise.
// let p = Promise.allSettled([prom1, prom2]);
// p.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.race takes an iterable of promises and returns a single promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
// let p = Promise.race([prom1, prom2]);
// p.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// Promsie.any takes an iterable of promises and returns a single promise that resolves as soon as one of the promises in the iterable resolves, with the value from that promise. If no promises in the iterable resolve (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.
// let p = Promise.any([prom1, prom2]);
// p.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value.
// let p = Promise.resolve([prom1, prom2]);
// p.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.reject() method returns a Promise object that is rejected with a given reason.
let p = Promise.reject([prom1, prom2]);
p.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})