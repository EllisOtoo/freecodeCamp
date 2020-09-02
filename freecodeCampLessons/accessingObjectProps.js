// Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 
// 

let tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
}



//  to add a prop name with space 
tekkenCharacter['hair do'] = 'Afro';


let newPropAge = 'characterAge'

//Or using a variable value as Prop Name::
tekkenCharacter[newPropAge] = 35;
//P.S:: Bracket notation is very useful because sometimes 
//object properties are not known before runtime or we need to access them in a more dynamic way.

// console.log(tekkenCharacter)



// Using Bracket Notation for a saimple food programm::

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
// console.log(checkInventory("apples")); // Passes scanned 
console.log(checkInventory("avocado", 2));
console.log(checkInventory("asana"));
console.log(checkInventory("apples"));

// Passes scanned 
// item as apples into "checkInventory" function