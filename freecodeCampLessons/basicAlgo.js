//* Algo to reverse any String!!

function reverseString(str) {
    // console.log (str.split(''));
    str = str.split('');
    let reversedSplitArray = [];
    for (let i = 0, counter = 1; i < str.length; i++) {
        reversedSplitArray.push(str[str.length - counter++]);
    }
    // console.log(reversedSplitArray.join(''))
    str = reversedSplitArray.join('')
    return str;
}

reverseString("hello");


//* FACTORIAL::
function factorialize(num) {
    // let loopNo = num
    let product = 1,
        loopcount = num;

    for (let i = 0; i < loopcount; i++) {
        product *= num--
        // console.log(product)
    }
    return product;
}

console.log(factorialize(10));
// console.log(factorialize(5));



/// Find the longest word
function findLongestWordLength(str) {
    str = str.split(' ');
    // console.log(str.length)
    let arrayOfChar = [];
    let countup = 1;
    let currentLargest;
    for (let i = 0; i < str.length; i++) {
        arrayOfChar.push(str[i].split(''));
    };
    let arrayOfLength = arrayOfChar.map((value) => value.length);
    console.log("Lengthiest Word: ", arrayOfLength.reduce((previous, next) => {
        if (previous > next) {
            return previous
        } else {
            return next
        }
    }))
    str = arrayOfChar.reduce((previous, next) => {
        if (previous.length > next.length) {
            return previous
        } else {
            return next
        }
    })
    return str.length
}

console.log("Word length is: ", findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log("Word length is: ", findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));

console.log(Math.max('1', '5', '2', '3'))
// console.log(Math.max(8, 2, 4))




function maxMath(...argus) {
    console.log(typeof argus)
    return Math.max(
        (function () {
            let list = ''
            for (let i = 0; i < argus.length; i++) {
                if (i === argus.length - 1) {
                    list += `${argus[i]}`
                    break;
                    n
                }
                list += `${argus[i]},`
            }
            console.log(list)
            return list
        })()
    )
}


console.log(maxMath(1, 2, 3, 4, 45, 5))



console.log('Reduce Method, : ', [1, 23, 456, 6, 500, 6000].reduce((previous, next) => {
    if (previous > next) {
        return previous
    } else return next
}))



// Pass in String 
// Start new reversedString with empty String
// looop through string starting from the last character appending reversed character into string
// return revrsed string


let preReversedString = 'hello World'

function reverseString(string) {
    let reversed = '';
    for (let arrayedString = Array.from(string), i = arrayedString.length - 1; i >= 0; i--) {
        reversed += arrayedString[i]
    }
    return reversed
}

console.log(reverseString(preReversedString))






// Return Largest Numbers in Arrays
function largestOfFour(arr) {

    let largestInArry = [];
    for (let i = 0; i < arr.length; i++) {
        largestInArry.push(arr[i].reduce((prev, next) => {
            if (prev > next) {
                return prev
            } else {
                return next
            }
        }))

    }

    return largestInArry;
}



console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));





// basic Algo: Confirm the Ending
//* Inspiration :: console.log(/.+ /.test('He ')) 

function confirmEnding(string, target) {
    let regex = new RegExp(`${target}$`); //! Very important piece of using the RegExp Object constructor approach to dynamically create Regex form passed (Target) string arg

    // * Return number of "a" characters in a string
    console.log('aaaaaaajjnmsaaa'.match(/a/g).length)
    string = regex.test(string)
    return string;
}

console.log(confirmEnding("Congratulation", "n"));



//* Repeat pased String a number of times:: 
function repeatStringNumTimes(str, num) {
    // First Conditon to test and break out
    let newStr = ''
    if (num < 0) {
        return ''
    }

    for (let i = 0; i < num; i++) {
        // console.log(str)
        newStr += str
    }
    return newStr;
}

console.log(repeatStringNumTimes("abc", 3));



//! Verbose ::
/* let firstNumElements = '';
    for (let i = 0; i < num; i++) {
        firstNumElements += strToArray[i]
    }
    firstNumElements += '...'
    str = firstNumElements

 */

//* WORKED!!!
function truncateString(str, num) {
    if (num >= str.length) return str
    let regexTruncate = new RegExp(`.{${num}}`); // Return exactly NUM characters using regex constructor and Template Literals
    let truncatedString = str.match(regexTruncate);
    let outputString = `${truncatedString[0]}...`;
    str = outputString

    return str;
}



console.log("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));


/* 
console.log("A-tisket a-tasket A green and yellow basket".length + 2)
console.log("A".length) */



//* FINDERS KEEPERS 
//  Algo task: Create a function that looks through an array arr and returns 
// the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return arr[i]
    }

    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// *Basic Algorithm Scripting: Boo who 
// Task:: Check if a value is classified as a boolean primitive. Return true or false.Boolean primitives are true and false.
function booWho(bool) {
    if (bool === true || bool === false) return true
    return false;
}

booWho(null);




function titleCase(str) {
    console.log(str.match(/.+/g))
    return str;
}

titleCase("I'm a little tea pot");


let mySampleString = 'Hello World 600';
let mySampleString02 = 'Hello';
console.log(mySampleString.match(/d (?!500)/)) // if 500 is ahead return regex before
console.log(mySampleString02.match(/.(?=.*)/)) // if 500 is ahead return regex before
console.log(mySampleString.match(/(?<=World )600/)) // Matching with lookBehind Regex



//Title Case a Sentence
function titleCase(str) {
    let splitString = str.split(' ')
    let newWord = []
    // console.log(splitString)
    for (let i = 0; i < splitString.length; i++) {
        // say string is "LiTTle"
        splitString[i] = splitString[i].toLowerCase();
        newWord.push(splitString[i].replace(/\w/, splitString[i].charAt(0).toUpperCase()));
    }

    return newWord.join(' ')
}

// let completeSentence = newWord.join(' ')
// return completeSentence

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));



//* Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.


function frankenSplice(arr1, arr2, n) {
    // Starts inserting at the second position of arr2
    let finalArray = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n, arr2.length)]; // Copy Arr1 
    // into final Array from 0-n positon fo Arr1, Copy entire array of Arr2, copy arry of Arr2 from position N to the last member of Arr2
    console.log(arr1, arr2)
    return finalArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
// frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice([1, 2], ["a", "b"], 1)




// * Falsy Bouncer
//! Task: Remove all falsy values from an array.
// NB:: Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    let filteredArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) filteredArray.push(arr[i])
    }
    return filteredArray;
}

bouncer([7, "ate", "", false, 9]);





// console.log(Math.min(sampleArray02[0], sampleArray02[1]))





let unsorted = [80, 304, 15, 10];

let sort = array => {
    let newCollection = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j + 1]) {
                newCollection.push(array[i])
            }
        }
    }
    return newCollection
}

// console.log('Sorted Array ', sort(unsorted))



let sortFunc = array => {
    let newCollection = [];
    for (let i = 0; i < array.length; i++) {
        function checkAgain(reccursionNumber) {
            if (reccursionNumber <= 0) {

            }

            checkAgain(array.length);
        }

    }

}





let someArray = [1, 3, 45];

if (someArray.every((value) => value < 20)) someArray.push(2);
console.log(someArray)



function callSecond() {
    console.log('Just called')
}


function logHello(n) {
    if (n <= 0) {
        return 'Done'
    }
    console.log(n)
    n -= 1;
    return logHello(n) + callSecond()
}


console.log(logHello(4));


// let sampleArray = [4,3,6, 10];
// let testArray = [3, 6, 12, 14]

function sortElements(array) {
    let newSort = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ((function checkIfTrue(numofChecks) {
                    if (array[i] <= array[j]) {
                        if (numofChecks == 0) {
                            return true
                        }
                        checkIfTrue(numofChecks - 1)
                    } else {
                        return false
                    }
                })(array.length)) {
                newSort.push(array[i])
            } else {
                console.log('Failed')
            }
        }
        console.log(newSort)
    }
}

// sortElements(testArray);

let testArray = [6, 3, 12, 14]

let finalResult;

function funcResult(numOfRecurs) {

    // if (numOfRecurs == 10) return true
    if (numOfRecurs == 0) {
        finalResult = true
        return
    } else finalResult = false
    console.log(numOfRecurs)
    funcResult(--numOfRecurs)

};

funcResult(10);

if (
    finalResult
) {
    console.log('Positive')
}



function checkLowerValue(testArray) {
    let count = 0;
    let sort = []
    for (let i = 0, j = 0; i < testArray.length; i++) {
        (function check(runs) {
            if (testArray[i] <= testArray[j]) {
                console.log('Runs', runs)
                if (runs === 1) {
                    sort.push(testArray[i]);
                    return
                };
                j++;
                check(--runs);
            } else return
        })(testArray.length)
    }
    return sort
}



// console.log(checkLowerValue(testArray));


// console.log(ReturnAfterForLoop(testArray))



/* if ((function HelloWorld(numOfRecurs) {
        if (numOfRecurs === 0) {
            return true
        }
        HelloWorld(numOfRecurs - 1)
    })(testArray.length)) {
    console.log("Hello all recursion evaluated to true")
} */




/* funcResult(10);
console.log(finalResult) */



testArray = [13, 46, 1, 12, 3465]
console.log(testArray.sort())
console.log(testArray.sort((a, b) => a - b))
console.log(testArray)



var items = [{
        name: 'Edward',
        value: 21
    },
    {
        name: 'Sharpe',
        value: 37
    },
    {
        name: 'And',
        value: 45
    },
    {
        name: 'The',
        value: -12
    },
    {
        name: 'Magnetic',
        value: 13
    },
    {
        name: 'Zeros',
        value: 37
    }
];



console.log(items.sort((a, b) => a.value - b.value));
let stringToCount = "What is the average airspeed velocaaaity of an unladen swallow kssa sakksaksmd dsakkssam ksaksaksa sakksasaksa skskss,salklsasalsalsalsasasasakss askasksa mssajsaj ksaksakask smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa What is the average airspeed velocaaaity of an unladen swallow kssa sakksaksmd dsakkssam ksaksaksa sakksasaksa skskss,salklsasalsalsalsasasasakss askasksa mssajsaj ksaksakask smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa What is the average airspeed velocaaaity of an unladen swallow kssa sakksaksmd dsakkssam ksaksaksa sakksasaksa skskss,salklsasalsalsalsasasasakss askasksa mssajsaj ksaksakask smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksa smkskksakaskksaksakakskksaa kaskaskakksaksa saksakaksksa ksaksakksa ksasaksaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa "
// console.log(Math.max(...stringToCount.split(' ').map(value => value.length)))
let stringLengths = Math.max(...stringToCount.split(' ').map(value => value.length));
console.log(stringLengths)




function helloArrays(string) {
    // let list = ...string.split(' ').map(item => item.length)    
    // console.log(Math.max(someValues))
}


helloArrays("What is the average airspeed velocaaaity of an unladen swallow")




console.log([1, 2, 45].indexOf(2))



function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b); // Sort Array with sort method, provide funcion argument to sort in proper order
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return arr.indexOf(arr[i])
        }
    }
    return arr.length
}

// getIndexToIns([40, 60], 50);
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
console.log(getIndexToIns([2, 5, 10], 15))
// getIndexToIns([3, 10, 5], 3)



// Return true if the string in the first element of the array contains all of the 
// letters of the string in the second element of the array.

function mutation(arr) {
    let regex = new RegExp(`${arr[1][0]}`, 'i'); // Using Regex Constructor // Pass regex flag as second argument
    // console.log (new RegExp(`${arr[1][0]}`).test('hello'))
    for (let i = 0; i < arr[1].length; i++) {
        if (new RegExp(`${arr[1][i]}`).test(arr[0])) continue // return false
        else {
            return false
        }
    }
    /* for (let i = 0; i < arr[1].length; i++) {
        if (!!new RegExp(`${arr[1][i]}`).test(arr[0])) {
            console.log('Passed')
        } // return false
        else continue
        // if (!!true) console.log('Worked')
    } */
    return true
}

console.log(mutation(["hello", "helli"]));
console.log(mutation(["hello", "hel"]));



// Chunky Monkey//   Write a function that splits an array (first argument) 
// into groups the length of size (second argument) and returns them as a two-dimensional array.

/* 
Create empty array
Create new arrays of "size" push into new created array 

*/
/* 

Select elements and push elements up to size length into new array
Push populated aray into new array
Move to next group, create new array

*/

function chunkArrayInGroups(arr, size) {
    let loopRepition = arr.length;
    let ArrayOfArrays = []
    for (let i = 0; i < loopRepition / size; i++) {
        // ArrayOfArrays.push([])
        ArrayOfArrays.push(arr.splice(0, size))
    }
    return ArrayOfArrays;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", 'e', 'f', 't', 't', 'j'], 3));