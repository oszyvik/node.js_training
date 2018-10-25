//Simple promise.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});

myPromise.then((data) => {
    console.log('Promise succesfull.');
}).catch((e) => {
    console.error('Promise was rejected.', e);
});

console.log('After then promise.');

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1'), 3000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p2'), 3000);
});
Promise.all([p1, p2])
    .then(values => console.log(values))
    .catch(e => console.error(e));

Promise.race([p1, p2])
    .then(value => console.log(value))
    .catch(e => console.log(e));