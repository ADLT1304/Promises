//resolve: if it's successful
//reject: if it's not successful
let b; 
b = 2 + 5;
c = 17 - 9

const exampleVar = new Promise ((resolve, reject) => {
    // console.log('Making request')
    if (b === 7) {
        resolve ('SUCCESS: exampleVar request was successful')
    } else {
        reject ('ERROR: exampleVar request was unsuccessful')
    }
});

const processVar = new Promise ((resolve, reject) => {
    if (c == 4) {
        resolve ('SUCCESS: processVar request was successful')
    } else {
        reject ('ERROR: processVar request was unsuccessful')
    }
})

Promise.allSettled ([
    exampleVar,
    processVar
]).then((message) => {
    console.log(message)
}).catch((message) => {
    console.log((message));
})