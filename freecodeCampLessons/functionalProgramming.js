// * Uisng Immutable Js
let {
    Map,
    fromJS,
    List
} = require('immutable');


//*NOTES ON FUNCTIONS



function incrementer(value) {
    return value + 1
    // Only change code above this line
}
// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

// The functions that take a function as an argument, or return a function as a return value are called higher order functions.

// When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.



// console.log([1, 2, 3, 4, 3, 0].splice(2))
// console.log(['Netflix', 'YouTube', 'Vimeo', 'Vine'].splice(2, 1));


// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};




// When you join two windows into one window
Window.prototype.joinWindow = function (otherWindow) {
    console.log(otherWindow)
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this
}


Window.prototype.openTab = function () {
    this.tabs.push('New Tab');
    return this
}


Window.prototype.closeTab = function (index) {
    this.tabs.splice(index, 1);
    // console.log('Tabs Remaining;', this.tabs)
    let tabsBeforeIndex = this.tabs.splice(0, index);
    let tabsAfterIndex = this.tabs.splice(0);
    // console.log('Tabs After Index;', tabsAfterIndex)
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex)
    return this
}

// Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'])
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine'])

socialWindow.sampleFunction = incrementer(2);
// socialWindow.closeTab(1)
// console.log(socialWindow.tabs)
let finalTabs = socialWindow
    .openTab()
    .joinWindow(videoWindow.closeTab(2))
    .joinWindow(workWindow.closeTab(1).openTab());

console.log(finalTabs.tabs)
// Open a new tab for cat memes
// Close third tab in video window, and join

// .joinWindow(workWindow) 

// let finalTab =  new Window()


// One of the core principles of functional programming is to not change things. Changes lead to bugs.





let sampleImmute = fromJS({
    name: 'Ellis',
    class: 'First Class',
    cars: ['Range', 'Gwagon']
})
console.log(sampleImmute)

const immutablObject = Map({
    name: 'Chales',
    girls: List(['Adwoa', 'Madny'])
});
console.log(immutablObject.toJS())




const pets = List(['dog', 'lizard'])
const otherPets = pets.push(List(['lisz', 'msms']));
console.log(otherPets)




let smallArray = ['hello', 'World'];
// console.log(smallArray.push('I').push('Can'))




const firstData = fromJS({
    name: 'aggg',
    age: 2
});

// console.log(firstData);
console.log(firstData.set('style', 'Louis'));
console.log(firstData)
// console.log(secondData)



// Data structures should be thought of as EITHER plain JavaScript OR Immutable.
// Operations on an Immutable object return the result of the operation.
// Operations on an Immutable object do not change the object itself, but instead create a new object.

// One of the core principles of functional programming is to not change things. Changes lead to bugs.
// It's easier to prevent bugs knowing that your functions don't change anything, //!including the function arguments or any global variable.



console.log(socialWindow.sampleFunction)




console.log([1, 2, 34].slice([1, 2, 34].indexOf(2), 1));





function simple(list, anotherElement) {
    let newList = [...list]; //Copy array elements into new Array without mutating argument
    newList.push(anotherElement)
    console.log(list)
    return newList
}


console.log(simple([1, 23, 4], 2))



//* EXAMPLES OF IMMUTABLE CODE THAT AVOIDS CHANGING THE GLOBAL VARIABLE
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookTitles, bookName) {
    let newBookList = [...bookTitles]; // Copy array elements into newBookList with Spread Operator
    // Dont Just Assign -> Use Spread to Copy
    newBookList.push(bookName)
    return newBookList;
    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    let newBooks = [...bookList]; // Same here Copy
    if (newBooks.indexOf(bookName) >= 0) {
        newBooks.splice(newBooks.indexOf(bookName), 1)
        return newBooks
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');



//* TESTING SOME CODE

function CreateArray() {

}



Array.prototype.callLength = function (callback) {
    return callback() * this.length
}


console.log('Length Value is: ', [1, 23, 45].callLength(
    function () {
        return 2
    }
))




var s = [23, 65, 98, 5];
var x = s.slice(0, 1) // Slide return a copy of the selected elements without 
// chnaging/mutating the original array i.e "S"

console.log(x)
console.log(s)


//*IMMUTABILITY WITH CONCAT Array metho which does not 
// change either of the arrays: be it the first or second
function nonMutatingConcat(original, attach) {
    // Only change code below this line
    let returnedArray = original.concat(attach)
    console.log(returnedArray)
    console.log(original)
    console.log(attach)
    return returnedArray
    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);



//* PUSH VS CONCAT
// Push adds an item to the end of the same array it is called on, which mutates that array. Here's an example:
// Concats returns a new array altogether both arrays in tact



const users = [{
        name: 'John',
        age: 34
    },
    {
        name: 'Amy',
        age: 20
    },
    {
        name: 'camperCat',
        age: 10
    }
];


let sumOfAges = users.reduce((prev, next) => prev + next.age, 0);
console.log(sumOfAges)



// The global variable
var watchList = [{
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

//* WORKED!
function getRating(watchList) {
    // Only change code below this line
    let numberOfChrisMovies = 0;
    let totalChrisNolanRating = watchList.reduce((total, next) => {
        if (next.Director == "Christopher Nolan") {
            numberOfChrisMovies++;
            return total + parseFloat(next.imdbRating)
        }
        return total
    }, 0);

    console.log(numberOfChrisMovies)
    let averageRating = totalChrisNolanRating / numberOfChrisMovies
    // Only change code above this line
    return averageRating;
};


console.log('Total Ratings', getRating(watchList));


/* var numbers = [(function () {
    return 20
})(), 12, 34]; */
var numbers = [(function () {
    return 20
})(), {
    age: 10
}, {
    age: 20
}];

/* 
var final = numbers.reduce(
    (prev, next) => prev.age + next.age);

console.log('Final value', final) */
// console.log(numbers[0]);



const newUsers = [{
        name: 'John',
        age: 34
    },
    {
        name: 'Amy',
        age: 20
    },
    {
        name: 'camperCat',
        age: 10
    }
];

let ourResult = newUsers.reduce((accumulator, next) => accumulator + next.age, 0);

let secondResult = newUsers.reduce((obj, user) => {
    obj[user.name] = user['age']
    return obj
}, {
    color: 'green'
});
console.log('secondResult: ', secondResult);

let xo = [{
        class: 'Upper',
        marks: [4.3, 7.0]
    },
    {
        class: 'lower',
        marks: [2.2, 6.3]
    }
]

let y = xo.reduce((accumulator, next) => {
    if (next.marks[1] > 5) {
        next.marks[1] = 16
    }
    accumulator[next.class] = next.marks[1]
    return accumulator
}, {});

//* Using Reduce as filter
let y2 = xo.reduce((accumulator, next, index) => {
    if (index == 1) {
        return accumulator
    }
    accumulator[index] = next.marks
    return accumulator
    // accumulator[next.class] = next.marks[1]
}, []);

//* Using Reduce as Mapper :: 
let y3 = xo.reduce((accumulator, next, index) => {
    accumulator[index] = next.marks[1] * 2
    return accumulator
}, [])




/* console.log(xo)
console.log(y)
console.log(y2)
console.log(y3) */


let next = 5.0;
// let next2 = toString(next);
// console.log (next2)

console.log(/h/.test('hello'));
console.log(Object.keys(toString(444)))
console.log(/\./.test(toString(next)));

if (next > 0 && /h/.test('hello')) {
    /*     console.log('hi')
        console.log('hi')
        console.log('hi')
        console.log('hi')
        console.log('hi')
        console.log('hi') */
}
if (/\./.test(12.1)) {
    console.log('Worked')
}

console.log(/\./.test(12.1))


//* Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
//* BRIEF: Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.
// We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].
// Note: Your function should not use any kind of for or while loops or the forEach() function.
const squareList = (arr) => {
    //Only change code below this line
    let squaredPositiveInt = arr.reduce(
        (accumulator, next, index) => {
            if (next > 0 && !/\./.test(next)) {
                next *= next
                accumulator.push(next);
            }
            return accumulator
        }, []
    )
    return squaredPositiveInt;
    // Only change code above this line
};

console.log(squareList([-3, 4.8, 5, 3, -3.2]))
// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// Math.sqr(2)



console.log('Test Tenary: ', true ? 'Yes' : 'No');


//* SORT METHOD 
function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']



// *HOW IT WORKS
//   JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged. 
//   Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.



//!SORT METHOD: A side effect of the sort method is that it changes the order of the elements in the original array.
x = 2
let xArray = [1, 2, 3]
let yArray = [6, 8, 0].concat(x);
console.log(xArray)
console.log(yArray)

//* Functional Programming: Split a String into an Array Using the split Method
function splitify(str) {
    // Only change code below this line
    return str.split(/\W/)
    // Only change code above this line
}
splitify("Hello World,I-am code");



//* Spilt and Join into string of sentence

function sentensify(str) {
    // Only change code below this lin
    return str.split(/\W/).join(' ')
    // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));


// Only change code below this line
function urlSlug(title) {
    console.log(title.replace(/ /g, '-').toLowerCase())
    // console.log(title)
    return
}
// Only change code above this line

//* Apply Functional Programming to Convert Strings to URL Slugs
// Only change code below this line

//*THIS:

function urlSlug2(title) {
    return title.trim().split(/ +/).join('-').toLowerCase()
}
// *** OR 

//* THIS::

function urlSlug(title) {

    let broken = title.trim().split(/ +/);
    console.log('len', broken.length)
    let reducedBroken = broken.reduce(
        (accu, next, index, array) => {
            // console.log(array.length)
            if (index == broken.length - 1) {
                accu = accu.concat(next);
                return accu
            }
            accu = accu.concat(`${next}-`);
            // console.log(accu)
            return accu
        }, ''
    )
    return reducedBroken.toLowerCase()
    // console.log('Array after reduce', broken) // Original Value Unchanged
    /* return  */
}


console.log(urlSlug(" Winter Is   Coming tomorrow"));



/* let emptyWorld = 'g'
console.log(emptyWorld.concat('hello'));
console.log('emptywolrd: ', emptyWorld); */


//*ARRAY.EVERY() METHOD
// Passing Callback to every method to test every element in the array
// meets some criteria returned from the callback (member < 0)
console.log([2, 3, 45].every((member) => member < 0))

function checkNegative(arr) {
    return arr.every(elem => elem < 0)
}

checkNegative([-1, -10, 8]) // returns false since not all elements are 
// negative or less than zero

//*ARRAY.SOME() METHOD
function checkPositive(arr) {
    // Only change code below this line

    return arr.some(elem => elem > 0)
    // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));



//* CURRYING 
function addXFirst(x) {
    // Only change code below this line

    return function (y) {
        return function (z) {
            return z + y + x
        }
    }
    // Only change code above this line
}

let secondReturnFunction = addXFirst(10);
let thirdReturnFunction = secondReturnFunction(20)(10);
console.log(thirdReturnFunction);



// console.log(addXFirst(10)(2)(10));


//* PARTIAL APPLICATION
// partial function :: 
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13