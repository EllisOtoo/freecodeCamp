function sumAll(arr) {
    console.log(Math.max(...arr)) // use es6 spread operator to pass values to Math.max function 
    // since passing array gives NaN
    // return 1;
}

// sumAll([1, , 6, 4, 67]);

//* SUM ALL NUMBERS WITHIN RANGE, RANGE INCLUSIVE
function sumAll(arr) {
    // console.log(Math.max(...arr));
    let maxValue = Math.max(...arr)
    let minValue = Math.min(...arr);
    console.log(minValue);
    let arraysInRange = [];
    arraysInRange.push(minValue, maxValue)
    for (maxValue; maxValue !== minValue; maxValue--) {
        if (maxValue == Math.max(...arr)) {
            continue
        }
        arraysInRange.push(maxValue)
    }

    arraysInRange = arraysInRange.reduce((acc, next) => acc + next)
    // arraysInRange.push(2)
    return arraysInRange
    // return 1;
}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));




//* DIFFING 2 ARRAYS

/* function diffArray(arr1, arr2) {
    let largestArrayLength = Math.max(arr1.length, arr2.length);
    let smallestArrayLength = Math.min(arr1.length, arr2.length);
    let largestArrayElems, smallestArrayElems;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].length === largestArrayLength) {
            largestArrayElems = [...arguments[i]] //* WORKS AS INTENDED
        };
        if (arguments[i].length === smallestArrayLength) {
            smallestArrayElems = [...arguments[i]] //* WORKS AS INTENDED TOO
        }
    }
    console.log(largestArrayElems)
    var newArr = largestArrayElems.reduce((acc, next) => {
        if (smallestArrayElems.indexOf(next) === -1) { //*TEST TO CHECK IF ELEMS IN LARGE 
            //* ARRAY ARE PRESENT IN SMALL ARRAY,
            //* IF NOT PRESS PUSH ACCUMULATOR
            acc.push(next);
            return acc;
        }
        return acc
    }, [])
    return newArr;
} 
 */

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
// should return ["diorite", "pink wool"]


//* LESSER CODE OPTION WORKED!!!
function diffArray(arr1, arr2) {
    // Compare Arr1 with Array 2
    let diffedArray = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            diffedArray.push(arr1[i])
        }
    }
    // Compare Arr2 with Array 1
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            diffedArray.push(arr2[i])
        }
    }
    return diffedArray
}


console.log(diffArray([1, 2, 3, 4, 5, 8], [1, 2, 3, 5]))
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", 
// "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"]


// console.log([1, 23, 4].indexOf(0))





//* DESTROYER FUNCITON !!
function destroyer(arr) {
    let finalArray;
    for (i = 1; i < arguments.length; i++) { // Starts comparing from argumennts index apart from first Array
        finalArray = [...arguments[0].filter((item) => item == arguments[i])]
        return finalArray
    }
}
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));




/* let noEle = [1, 23],
    arrayOfInterest = [1, 23, 45, 7, 10],
    filteredArray; 
*/

let noEle = ["yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"],
    arrayOfInterest = ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
    filteredArray;

for (let i = 0; i < noEle.length; i++) {
    if (i === 0) {
        filteredArray = arrayOfInterest.filter(item => item !== noEle[i] // Returns filtered Array // Filter Filtered Array
        )
    }
    if (i > 0) {
        filteredArray = filteredArray.filter(item => {
            // console.log('Value of filtered Array: ', filteredArray)
            return item !== noEle[i]
        }) // Filter filtered Array as after first Iteration 
    }
    // console.log('Return all Items:', filteredArray.filter(item => item))
}

console.log(filteredArray)


// console.log([1, 23, 45, 7].filter(item => item !== noEle[0]))

let counter = 0

/* function filterRecursions(array, ...comparableValues) {
    array.pop()
    if (array.length === 0) {
        console.log('this Run');
        return array
    }
    filterRecursions(array)
} */

function filterRecursions(array) {
    array.pop();
    let num = 20;
    if (array.length == 0) {
        console.log('this Run');
        return array
    }

    return filterRecursions(array) + num
}

let finalArrayValue = filterRecursions([1, 4, 57, 8, 9]);
console.log(finalArrayValue);




/* let sampleArray = [{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}]; */


console.log(
    whatIsInAName([{
        first: "Romeo",
        last: "Montague"
    }, {
        first: "Mercutio",
        last: null
    }, {
        first: "Tybalt",
        last: "Capulet"
    }], {
        last: "Capulet"
    }));

function whatIsInAName(collection, source) {
    var arr;
    // Only change code below this line
    arr = [...collection.reduce(
        (accu, next, index) => {
            let props = Object.keys(next); // returns ["first", "last"] per iter


            if (next[props[0]] === source[props[0]] || next[props[1]] === source[props[1]]) {
                accu.push('Test');
                return accu
            };
            return accu;
        }, []
    )]
    // Only change code above this line
    return arr;
}


/* let collection = [{
    "apple": 1,
    "bat": 2
}, {
    "apple": 1
}, {
    "apple": 1,
    "bat": 2,
    "cookie": 2
}] */


/* let source = {
    "apple": 1,
    "cookie": 2
} */


/* let collection = [{
    "a": 1,
    "b": 2,
    "c": 3
}] */

/* let collection = [{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}];*/


let collection = [{
    "apple": 1,
    "bat": 2
}, {
    "apple": 1
}, {
    "apple": 1,
    "bat": 2,
    "cookie": 2
}, {
    "bat": 2
}]

/* 
let source = {
    last: "Capulet"
} */

let source = {
    "apple": 1,
    "bat": 2
}

/* let source = {
    "a": 1,
    "b": 9999,
    "c": 3
} */

let sourceLength = Object.keys(source).length; //
let sourceProperties = Object.keys(source) // ["apple","cookie"]

let passedObjects = collection.reduce((acc, next) => {
        for (let i = 0; i < sourceLength; i++) {
            if (next.hasOwnProperty(sourceProperties[i]) && next[sourceProperties[i]] === source[sourceProperties[i]]) {
                if (i === sourceLength - 1) {
                    acc.push(next)
                }
            } else break
        }
        return acc
    }, []

)

console.log(passedObjects)