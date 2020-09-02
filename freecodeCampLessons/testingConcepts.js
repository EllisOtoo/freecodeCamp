// Reverse the string character Algo::
let humbleString = "Never quit challenging yourself!"
console.log('Before:', humbleString);
humbleString = humbleString.match(/[^!]/g)

let newString = "";


for (let i = 0, counter = 1; i < humbleString.length; i++) {
    newString += humbleString[humbleString.length - counter++]
}

newString += '!';
console.log('After:', newString);


// let text = "<h1>Winter is coming</h1>";
let text = "Winter is coming";
let myRegex = /^W/; // Change this line
console.log(myRegex.test(text))

//Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;
console.log(quoteSample.match(nonAlphabetRegex))


// /[A-Za-z0-9_]/ == /\w/ // * <<< This two regex return the 
// same alphanumberic characters



//NOTE ON REGEX
// You learned how to match literal patterns 
// (/literal/) and wildcard character (/./). 
// Those are the extremes of regular expressions, 
// where one finds exact matches and the other matches 
// everything


// * Match all digit characters 
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;


//* Regular Expressions: Match All Non-NumbersPassed

let movieName02 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let finalResult = movieName02.match(noNumRegex).length;



let userName = 'helloWorld98';
let userCheck = /^\w+\d+/;
console.log(userCheck.test(userName))

if (userCheck.test(userName)) {
    /// addToDatabase(userName)
    console.log('Add to Database')
} else {
    // Prompt User for name again
}

// If negative lookahead is not there, return whatever is in the remaining regex
/* let amount = 'GHS 200.20000000000'
console.log(amount.match(/GHS 200.(?!20)\d*/

/* let password = "abcaaaasssajajajajjaajs123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log('Freeccode Password Checker', checkPass.test(password), password);
 */



// let password = 'hello123'
let testingRegex = /(?!hello)/g
// console.log(testingRegex.test(password));


let lookAheadString = 'Hello World';
console.log(lookAheadString.match(/Hello (?=World)/));

// let noquit = "qt";
// let qRegex = /q(?!u)/;
// console.log(noquit.match(qRegex));


let urlRgex = /http[s]?\:\/\/www\.google\.com\//;
// console.log('urlRgex', urlRgex.test(url2));

let sampleUrl = 'https://www.google.com/123',
    sampleUrl02 = 'https://www.facebook.com/123',
    urlRegexChkr = /\D*(?=.com)/;
urlRegexChkr2 = /\D*(?=\d{3})/g;
urlRegexChkr3 = /(?=\d{3})(?=face)/;


console.log('Are 3 digits ahead?: ', urlRegexChkr3.test(sampleUrl02));
// console.log('Is 123 ahead?: ', urlRegexChkr2.test(sampleUrl02), sampleUrl02.match(urlRegexChkr2))


function checkUrl(...strings) {
    let result = []
    for (let i = 0; i < strings.length; i++) {
        result.push(strings[i].match(urlRegexChkr)[0])
    }
    console.log(result)
}


// checkUrl(sampleUrl, sampleUrl02)
// console.log(sampleUrl.match(urlRegexChkr))


let amount = 'GHS 5000000';
let password = "ab1";
// let checkPass = /(?=\w{3,6})(?=\D*\d)(?!a)/; // returns false because there's "a" 
let checkPass = /(?=\w{3,6})(?=\D*\d)(?!u)/; // returns true becuase string string does not have 2
// let checkPass = /(?!\D)/;
// let checkPass = /(?<=\w{3})\w*/;
console.log(checkPass.test(password)); // Returns true
// console.log(password.match(checkPass));

// console.log(`The words after abc is ${password.match(checkPass)[0]}`);
console.log(`The amount the user entered is:${amount.match(/(?<=GHS) \d{4}/)}.00`);



//* Largest Regex Pass with Look Aheads


// My Regex::

// Intsruction:
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\w*\d{2})(?=^\D)/; // Change this line
let finalResult02 = pwRegex.test(sampleWord); // (?=^a-z{5,}\d{2})


// FC Code
// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password2 = "abc123";
let checkPass2 = /(?=\w{3,6})(?=\D*\d)/;
checkPass2.test(password2); // Returns true


//* Study this FC Regex for groups

let myString = "Eleanor D Roosevelt";
let myNameRegex = /(Franklin|Eleanor).*Roosevelt/;
let nameResult = myNameRegex.test(myString);
console.log(nameResult)



let foo = 'D. ';
console.log(foo.match(/.*/))



let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = '$3 $2 $1'; // Change this line
// let result = str.replace(fixRegex, replaceText);


//Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g; // Change this line
// let result = hello.replace(wsRegex, ''); // Change this line

console.log(result)

//Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//Almost every value on its own in JavaScript evaluates to true, 
// except what are known as the "falsy" values: false, 0, "" (an empty string), 
// NaN, undefined, and null.


function CountArrayAdd(arrayType, newNumber) {
    arrayType.push(arrayType.length * newNumber)
    return arrayType
}

console.log(CountArrayAdd([2], 4))


//This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.


function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);

        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}


console.log(zeroArray(3, 2))

function copyMachine(arr, num) {
    let newArr = [];
    let count = 1;
    while (num >= 1) {
        newArr = [...arr]
        // Only change code above this line
        num--;
        count++
    }

    return newArr;
}



copyMachine([true, false, true], 2)

/// Splice copies modifies source array, slice keeps source array intact



// Copy Machine Funcction using push and spread operator
// create multi-dim array or array of arrays


function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr])
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));



// Unsing Built-in indexOf function
function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) == -1) return false
    else return true
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));





let simpleArray = [1, 2, 3, 34, 57, 7];
let newLoopArray = []
for (let i = 0; i < simpleArray.length; i++) {
    if (simpleArray[i] !== 3) {
        newLoopArray.push(simpleArray[i])
    }
}

console.log(newLoopArray);

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        // console.log(i)
        if (arr[i].indexOf(elem) != -1) {} else {
            newArr[i] = [];
            newArr[i].push(arr[i])
        }
        /*      for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] !== elem) {
                    newArr[i].push(arr[i][j])
                }
            }  */

    }
    // Only change code above this line
    return newArr;
}

console.log(
    /* filteredArray([
        [10, 8, 3],
        [14, 6, 23],
        [3, 18, 6]
    ], 18) */
);




function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].indexOf(3))
        if (arr[i].indexOf(elem) !== -1) {
            arr.splice(i, 1) // if element is inside array remove array at current position, i,
        }

        // if (arr[i].indexOf(elem) != -1) {
        //     arr.splice(i, 1) // if element is inside array remove array at current position, i,
        //     console.log(arr[i].indexOf(3))

        // }
    }
    // Only change code above this line
    return newArr = [...arr];
}


console.log('output', filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9]
], 3));


function filteredArray(arr, elem) {
    let newArr = [];
    // console.log(arr.length)
    // Only change code below this line
    let maxloop = arr.length;
    // console.log(maxloop);
    let base = 0;
    for (let i = 0; i < maxloop; i++) { // So 3 loops
        if (arr[base].indexOf(elem) !== -1) arr.splice(base, 1)
        else base++
    }
    newArr = [...arr]
    // console.log(arr);
    // Only change code above this line
    return newArr;
}

/* console.log(filteredArray([
    ["amy", "beth", "sam"],
    ["dave", "sean", "peter"]
], "peter"))
 */
/* console.log(filteredArray([
    ["trumpets", 2],
    ["flutes", 4],
    ["saxophones", 2]
], 2)) */


/* console.log('final output', filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9]
], 3)); */




function filteredArrayV2(array, element) {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].indexOf(element) === -1) {

        }
    }
}


let sampleArray = [
    [1, 2, 1],
    [1, 6, 3],
    [1, 13, 26],
    [19, 3, 9]
]

let filtered = [],
    unwantedEle = 3;
// console.log(sampleArray[0].indexOf(3));


for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i].indexOf(unwantedEle) === -1) filtered.push(sampleArray[i])
}

console.log(sampleArray)
console.log(filtered)


filteredArrayV2




/* console.log(filteredArray([
    ["trumpets", 2],
    ["flutes", 4],
    ["saxophones", 2]
], 2)) */



// let arraySample = [1, 2, 3];
// console.log(arraySample.splice(0, 1))
// console.log(arraySample)
// console.log(arraySample.splice(0, 1))
// console.log(arraySample)