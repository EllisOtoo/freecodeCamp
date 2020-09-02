// Only change code below this line
let arrayReturned = []


/* function countdown(n) {

    if (n < 1) return [];
    else {
        console.log('This RUn')
        arrayReturned.push(n);
        countdown(n - 1);
    }

    console.log(arrayReturned)
    // return 'arrayRetuned'
} */
// Only change code above this line


// function logA(a) {
//     if (a == 1) {
//         return a
//     } else {
//         console.log(a);
//         logA(a - 1);
//         console.log('Did it call this')
//     }
// }


function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}


console.log(countup(5));

// console.log(logA(10))
// console.log(countdown(5));