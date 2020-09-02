// A simpele  module that lets you know the
// quantity of food you have in your inventory

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
    "new requests": []
};


function checkInventory(scannedItem, quantity = 22) {
    // Only change code below this line
    if (foods[scannedItem] == undefined) {
        foods["new requests"].push({
            [scannedItem]: quantity
        })
        return foods
        // console.log(foods['new requests'])
    }
    return foods[scannedItem]
    // Only change code above this line
}



function noMoreSelling(discontinuedItem) {
    delete foods[discontinuedItem]
}

noMoreSelling('apples');
console.log(checkInventory("avocado", 2)); //Returns foods
// console.log(checkInventory("apples")); // Passes scanned 
// console.log(checkInventory("asana"));
// console.log(checkInventory("apples"));

// Passes scanned 
// item as apples into "checkInventory" function
// console.log(foods);



//* OTHER CODE::
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    // Only change code below this line
    let allObjProps = Object.keys(obj)
    console.log(allObjProps);
    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (obj.hasOwnProperty(Object.keys(obj)[i]) == true) {
            return true
        } else {
            return false
        }

    }

    // Only change code above this line
}


// Simpler Approach:

function isEveryoneHere(obj) {
    // Only change code below this line
    console.log(obj.Alan)
    let allObjProps = Object.keys(obj)
    if (obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Ryan') && obj.hasOwnProperty('Jeff') && obj.hasOwnProperty('Sarah')) {
        // if obj has all hardcoded properties in return true
        return true
    } else {
        return false
    }

    // Only change code above this line
}
console.log(isEveryoneHere(users));


console.log(isEveryoneHere(users));

let obj = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
}

console.log('All values', ["Alan", "Jeff", "Sarah", "Ryan"].every(name => obj.hasOwnProperty(name)))
console.log('Are all ages greater than 2: ', [undefined,
    '', 0, false, false
].every(value => !value));


console.log(Boolean({}))

// Return number of users with Online Status set to "true"(Boolean)
function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let user in usersObj) { // Use for ... in to loop through Object keys
        if (usersObj[user]['online'] == true) {
            count++
        }
    }
    return count
    // Only change code above this line
}


console.log(countOnline({
        Alan: {
            online: false
        },
        Jeff: {
            online: true
        },
        Sarah: {
            online: false
        }
    }

))



// ALternatively Object.keys(object) would return array of object keys as seen here:
let users2 = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj)
    // Only change code above this line
}

console.log(getArrayOfUsers(users2));

// Coding Interview Prep section of the curriculum also cover the 
// ES6 Map and Set objects


// UserProfile::: 
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend)
    // console.log(userObj.data.friends)
    return userObj.data.friends
    // Only change code above this line
}

console.log(addFriend(user, 'Pete')); // Add "Pete" to "Kenedies"  Object 

// The greater than or equal to operator (>=) compares 
// the values of two numbers. If the number to the left 
// is greater than or equal to the number to the right, it returns true. 
//Otherwise, it returns false
// the greater than or equal to operator will convert data types while comparing.


// Type Conversion for ==, >= and <= opeators
6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false