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