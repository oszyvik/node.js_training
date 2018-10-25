//Simple promise.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});

myPromise.then((data)=>{
    console.log('Promise succesfull.');
}).catch((e)=>{
    console.error('Promise was rejected.', e);
});

console.log('After then promise.');