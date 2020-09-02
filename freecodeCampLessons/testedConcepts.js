class Book {
    constructor(author, year) {
        let i = 33;
        this._author = author;
        this.year = 1992 + i;
        this._age = 11
    }
    static helloWorld() {
        return 'Hello Wolrd';
    }
    get writer() {
        return this._author;
    }

    set writer(updatedAuthor) {
        this._author = `${updatedAuthor}`;
    }
}


let myNewBook = new Book('Ellis');

let myNewBookNo2 = new Book('Joe');
myNewBookNo2.writer = 'Hagar Biney';

console.log(myNewBookNo2);
console.log('Checking Static Prop: ', Book.helloWorld());




// Passing arguments as object properties
function hellohere(one = 1, two = 2) {
    return {
        one,
        two
    }
}



console.log(hellohere())

// Using Destructuring , template literals 
// and Object Literals


function addressMaker(address) {
    const {
        street,
        no
    } = address;
    let correctedAddress = `Our ${street} street`
    return {
        street,
        no,
        correctedAddress,
        helloWorld: Book.helloWorld()
    }
}


console.log(addressMaker({
    street: 'Moonlight',
    no: 12
}))




let incomes = [2000, 1000, 1300]

for (income of incomes) {
    // () => income += 300
    // incomes.push(income+)
    console.log(income)
}


console.log(incomes)




class NoConstructor {
    printHello() {
        console.log('Hello No Constructor Func')
    }
}



let zeroConstructor = new NoConstructor();
console.log(zeroConstructor.printHello());


class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76);

console.log(thermos);
thermos.temperature = 20;
console.log(thermos);
// console.log(thermos.temperature)
console.log(thermos.fahrenheit);


const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.catch(error => {
    console.log(error);
})



// Regex Matching all characters and numbers in a specified range:
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // mathc letters h thorugh s and numbers 2 through 6
let result = quoteSample.match(myRegex); // Change this line



// * REGEX::
//Unreversed String
let unreversedString = 'Helloooo, World',
    // first method
    noCommaString = unreversedString.match(/[^,]/g).join(''); // Match all characters except the 'comma'
let reversedString01 = noCommaString.split(' ').reverse().join(' ');


// second method
freshArray = [];
noCommaString.split(' ').map((item) => freshArray.unshift(item));
let reversedString02 = freshArray.join(' ');

// Log
console.log(reversedString02, reversedString01, noCommaString);
// console.log('Regex Results:', unreversedString.match(/.+/g));







// Troublesome lazy matching Regex
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

// let regString = "Titanic";
let regString = "<h1>Titoooooanic</h1>";
// console.log(regString.match(/<.*?>/))
console.log(regString.match(/to+/)) // Finds the one character or more of "o"
console.log(myRegex.test(text));


// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);


console.log(filteredArray([
    ["trumpets", 2],
    ["flutes", 4],
    ["saxophones", 2]
], 2))