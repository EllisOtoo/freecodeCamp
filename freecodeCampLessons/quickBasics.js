let applesClass = ['red', 'green', 'yellow']
packApplesIntoBox('box', 50)


function packApplesIntoBox(containerType, numberToPack) {
    opencontainer(containerType);
    console.log(`Packing Begins`)
    packApples(numberToPack, containerType)

}

function opencontainer(containerType) {
    switch (containerType) {
        case 'box':
            console.log('Box Open');
            break
    }
    // console.log()
}

function packApples(numberToPack, containerType) {
    for (let i = 0; i < numberToPack; i++) {
        if (i >= 0 && i <= 25) {
            console.log(`Packing ${i} into ${containerType}`)
        } else {
            console.log(`Packing ${i} into other box`)
        }
    }
    console.log(`Packing Complete`)
}


let stockArray = [];

function countdown(x) {
    if (x < 1) {
        return stockArray
    } else {
        stockArray.push(x);
        countdown(x - 1)
        return stockArray;
    }
}


// console.log(countdown(5))
console.log("Empty Array: ", countdown(-1))
console.log(countdown(5))
console.log(countdown(10))
// console.log(stockArray);

let range = []

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return range.push(startNum);

    } else {
        console.log(startNum);
        range.push(startNum)
        startNum++;
        rangeOfNumbers(startNum, endNum);
    }
};


// console.log(rangeOfNumbers(4, 4));
console.log(rangeOfNumbers(5, 20));
// console.log(rangeOfNumbers(6, 9));
console.log("Returned from Function: ", range);


// * Declaring and Initiating variablesFunction Scope vs Block scope with Let
function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}



function spellName(name) {
    return `${name}`
}


try {
    spellName()
} catch (er) {
    console.log(er)
}



//* Preventing Objects Mutation with Object.freeze(*object goes here*)
function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    // Object.freeze(MATH_CONSTANTS)

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}



const PI = freezeObj();
console.log(PI)



// const SAMPLEARRAY = [1, 4, 57]
const SAMPLE_OBJ = {
    "name": "Sample Array"
}

// const objects can be mutate and not reassigned
// Object.freeze() freezes objects to avoid mutation 

// Make array read only or unwritable
Object.freeze(SAMPLE_OBJ);


try {
    SAMPLE_OBJ['name'] = 'Another Array';
    console.log('This run')
} catch (err) {
    // console.log('Erro Block Run!')
    console.log(err)
}



console.log(SAMPLE_OBJ);


// Default Parameters

// Copying elements of a n array with teh spread opereators(...)


// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    "use strict";
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    console.log(a, b)
    // Only change code above this line
    return arr;
}



const arr = removeFirstTwo(source);

console.log(arr)



let sampleObj = {
    name: 'ellis',
    classO: 'A+'
};

let hello = ({
    name,
    classO
}) => {
    console.log(name, classO)
}


hello(sampleObj)



//Create Strings using Template Literals


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};


// Take array
// Turn item into list item 
// Push into new const array

function makeList(arr) {
    "use strict";

    // Only change code below this line
    const resultDisplayArray = []; // Empty Array 
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class='text-warning'>${arr[i]}</li>`);
        // console.log(i)
    }
    // Only change code above this line

    return resultDisplayArray;
}


// for(let i = 0; i<2; i++) {
//   console.log('hello')
// }

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)



//  Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


class Bagget {
    constructor(origin) {
        this.counrty = origin
    }
}

// Concise Object Literal with Shorthand ObjectProperty 

const createPerson = (name, age, gender) => {
    "use strict";
    // Only change code below this line

    let togoBagget = new Bagget('Togo');
    return {
        name,
        baggetCountry: togoBagget.counrty,
        age,
        gender
    };
    // Only change code above this line
};


console.log(createPerson().baggetCountry)