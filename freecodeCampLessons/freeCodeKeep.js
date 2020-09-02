let anArray = [12, 2, 3, 4, 56];

var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];




function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i]['firstName'] === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop]
            } else {
                return `No such property`
            }
        }
    }

    return 'No such contact'


}
// console.log(lookUp("Kristian", "lastName"));
console.log(lookUpProfile("Akira", "likes"));




/* if (contacts[3]['firstName'] == 'Kristian') {
    console.log(`Kristian FOund!`)
}


function checkUserNumber(luckyNumber) {
    for (let i = 0; i < anArray.length; i++) {
        console.log(`Run ${i} time`)
        if (anArray[i] != luckyNumber) return `You have lost`
    }
}
 */

// else if (contacts[i].hasOwnProperty(prop));
// else return contacts[i][prop]




console.log(contacts[1].hasOwnProperty('otherName'));


/* function loopThisFunction(n) {
    if (n <= 0) {
        return 4;
    }
    // let x = 'Hello'
    // console.log(`Loop this function run`);
    else {

        return loopThisFunction(n - 1);
    }
}


function seeWhenItRuns() {

    return 4;
}


function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return arr[n - 1] + sum(arr, n - 1);
    }
    // Only change code above this line
}


console.log(sum([2, 3, 4, 5], 3))


console.log([1, 2456, 78].isArray())
 */



let isAppleAvailable = true,
    currentAppleCount = 3;

function testLoop(loopLimit) {
    for (let i = 0; i < loopLimit; i++) {
        if (false) {

        } else if (isAppleAvailable && currentAppleCount > 1) {
            console.log('hi');
            // break;
        }
        // console.log('Happy')
        // if (i === 3) break;
    }

}



testLoop(5);

var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];




function checkKristian(name) {
    if (contacts[3]['firstName'] != name) console.log(`Matched`)
    else console.log('They are the same')
}


checkKristian('Kristian');






/* function lookUp(firstName, prop) {
    for (let i = 0; i < contacts.length; i++) {

         if (contacts[i]['firstName'] == firstName && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else if (contacts[i]['firstName'] == firstName) {
            return firstName;
        } else {
            return `No such contact`
        }

    }
};
 */




function lookUp(firstName, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i]['firstName'] != firstName) return 'No Such Contact';
        else if (contacts[i].hasOwnProperty(prop));
        else return contacts[i][prop]
    }
}


console.log(lookUp("Kristian", "lastName"));

// console.log(lookUp("Kristian"));

// console.log(testLookUp('Ellis'));
// console.log(testLookUp('Akira'));
// console.log(contacts[0]['firstName'] != 'Akira')



/* function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i]['firstName'] == name && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else if (contacts[i]['firstName'] != name) {
            return `No such contact`;
        } else if (!contacts[i].hasOwnProperty(prop)) {
            return `No such property`;
        }o0 `   `
    }
    // Only change code above this line
} */






/*     let userHeight = 55,
        age = 20;

if (userHeight > 30 && age > 18) console.log(`Qualified`)
else if (age > 18) console.log(`Second Statement`) */


function lookUpProfile(name, prop) {
    // Only change code below this line
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
    // Only change code above this line
}



function randomWholeNum() {
    // Only change code below this line
    let x;
    do x = Math.floor(Math.random() * 100000)
    while (x > 0);
    return 'Do while complete';
    // return (Math.floor(Math.random()*10));
}


console.log(randomWholeNum());



var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    // Only change code below this line
    let x;
    do {
        x = Math.floor(Math.random() * 100000);
        console.log(x);
    } while (x < 50000);
    return 'Do while complete because condition test failed';
    // return (Math.floor(Math.random()*10));
}

console.log(randomWholeNum());


let rangeValues = []

function range(min, max) {

    for (let i = min; i <= max; i += 4) {
        console.log(i)
        rangeValues.push(i)
    }
    console.log(rangeValues)
}




range(20, 30);




// * random numbers between a range : 
// Math.floor(Math.random() * (max - min + 1)) + min


/// * Generate random numbers using a function 
/* function randomRange(myMin, myMax) {
    // Only change code below this line

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}

 */




let kensContacts = [{
        'firstName': 'Gerard',
        'age': 52,
        'successfulProjects': ['Chara', 'Maca', 'JSJSJ']
    },
    {
        'firstName': 'Gerard',
        'age': 52,
        'successfulProjects': ['Chara', 'Maca', 'JSJSJ']
    }
];


console.log('ages' in kensContacts[1]);



// Tenary Operator
function checkEqual(a, b) {
    return a == b ? 'Equal' : 'Not Equal';
}
console.log(checkEqual(1, 2));






// *Use Multiple Conditional (Ternary) Operators


function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    } else if (a > b) {
        return "a is greater";
    } else {
        return "b is greater";
    }
}



//  Written as: 
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" :
        (a > b) ? "a is greater" :
        "b is greater";
}


//  Also:: 

function checkSign(num) {
    return num > 0 ? 'positive' :
        num < 0 ? 'negative' :
        'zero'
}

checkSign(10);


//* Logs 'n' even when n is less than 1
function countDown(n) {
    console.log(n);
    if (n >= 1) countDown(n - 1);

}


//* Logs n only if it's greater than 1
function countDownRun(n) {
    if (n >= 1) {
        console.log(n);
        countDown(n - 1)
    };
}



countDownRun(5);