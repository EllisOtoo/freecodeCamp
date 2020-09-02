//Constructor Functions: 
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird('Peter')
// Ufnction Prototypes::
Bird.prototype.sayCheese = () => 'Say Cheese';

let firstOwnProps = [];
//* LOOPING PROPERTY NAMES INTO OWNPROPS ARRAY
//* this loop returns own properties including prototypes props or functions/methods

for (let prop in canary) { // Looping over object properties
    firstOwnProps.push(prop)
}

console.log('Props check without confirming if they are "own" properties and not prototypes: ', firstOwnProps)

let secondOwnProps = []
//* This loop returns only owned properties excluding prototypes props or functions/methods

for (let prop in canary) { // Looping over object properties
    if (canary.hasOwnProperty(prop)) {
        secondOwnProps.push(prop)
    }
}


console.log(secondOwnProps)


//* Use Prototype Properties to Reduce Duplicate Code



//*  TEST FOR OWN PROPERTIES,ALL PROPERTIES (inc Prototypes) AND PROTOTYPE ONLY
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");


let ownProps = [];
let onlyPrototypeProps02 = [];
for (let props in beagle) {
    if (beagle.hasOwnProperty(props)) {
        ownProps.push(props)
    } else {
        onlyPrototypeProps02.push(props)
    }
}


console.log(onlyPrototypeProps02)

let prototypeProps = [];
let onlyPrototypeProps = [];
for (let props in beagle) {
    if (!beagle.hasOwnProperty(props)) {
        onlyPrototypeProps.push(props)
    }
    prototypeProps.push(props)
}

console.log(onlyPrototypeProps)
// Only change code below this line


//!NoteSince the constructor property can be overwritten 
//!(which will be covered in the next two challenges) it’s generally better to 
//!use the instanceof method to check the type of an object.

//* Eg:
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate instanceof Dog) { // can use instanceof operator/ constructor property but always use instanceof since "constructor" prop can be overwritten
        return true
    } else {
        return false
    }
}



let scooby = new Dog();
console.log(joinDogFraternity(scooby));



//* Setting prototype to one object at once and avoiding repeating "prototype" again
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    describe() {},
    eat() {
        'Get'
    },
    bark() {
        return "Wuff Wuff"
    }
};


let hello = new Dog('Scooby');
console.log(scooby.color)



//!Remember to Set the Constructor Property when Changing the Prototype
//*To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:


function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog, //! Set Constructor to Constructor Function whenever 
    //* you set prototype property to a new object or 
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};





let terrier = new Dog('Terrier');
console.log(terrier.constructor == Dog) // If constructor is not set to Constructor function after setting prototype prop to new object, this would return "false.
//* Using instanceof operator returns more consistent results


//! Read again on Object Oriented Programming: Understand the Prototype Chain


//* Setting child's properties to an instance of the parent :::
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype)

let beagle2 = new Dog();

console.log(beagle2)


//*Use Closure to Protect Properties Within an Object from Being Modified Externally
//Private varibles

function Bird() {
    let weight = 15;

    this.getWeight = function () {
        return weight;
    }
}




let smallBird = new Bird();


console.log(smallBird)
// console.log(smallBird.getWeight());




//*  Using an IFFY to group related Mixins
let funModule = (
    function () {
        return {
            isCuteMixin: function (obj) {
                obj.isCute = function () {
                    return true;
                };
            },
            singMixin: function (obj) {
                obj.sing = function () {
                    console.log("Singing to an awesome tune");
                };
            }
        }
    }
)()


// * The functional programming software development approach breaks a program into small, testable parts. 



// Prepare 40 Cups of Tea for Team members

// First Prepare 1 Tea:: Function that prepares Tea
let prepareTea = () => 'Tea'

let prepareMoreTea = (numberOfCups) => {
    let teaCup = prepareTea()
    let teaCups = []
    for (let i = 0; i < numberOfCups; i++) {
        teaCups.push(teaCup)
    }

    return teaCups
}


let teamOf40 = prepareMoreTea(40);
console.log(teamOf40)




console.log([1, 24, 657].filter((item) => item > 20))






function Person(name, age) {

    let priVar = 20;

    this.name = name;
    this.age = priVar += age;
}


Person.prototype.valueOf = () => 'Value of Method reset!'
Person.prototype.hi = 'hi!'
Person.prototype.countLetters = () => this.name



let littePerson = new Person('Ellis', 28);


littePerson.prototype = {
    bark: function () {
        return 'Wuff'
    }
}

let smallerPerson = Object.create(littePerson);

// littePerson.valueOf = () => 'Little Persons own method'
// littePerson.prototype.valueOf = () => 'Little Persons Prototype!'
// console.log(littePerson.valueOf)
// console.log(littePerson);



for (let prop in littePerson) {
    console.log(prop)
}


console.log(Person.__proto__.__proto__)
console.log(Object.prototype);



console.log(Array.prototype)


console.log('hello'.concat('Worrld'))
console.log(littePerson.name)
console.log(Object.keys(littePerson));
console.log(littePerson.age);


// console.log(smallerPerson.bark())
console.log(littePerson.constructor);



let midget = Object.create(Person);
console.log(midget.hi)



function Bird(name) {
    this.name = name;
}


// Bird.prototype.numLegs = 2;
Bird.prototype = {
    // constructor: Bird,
    numLegs: 7,
    age: 4,
    sound: () => 'Whew Whew'
}


function BedBugs(name) {
    this.name = name;
    this.age = 20
}

BedBugs.sayHello = () => 'Helloooooo'


/* let smallBedBug = Object.create(BedBugs, 'james');
console.log('BirdBug', smallBedBug.age) */

console.log('Bird Constructor: ', Bird.constructor)

let bird01 = new Bird('Tweety');
let bird02 = new Bird('Tiwtter');
let bird03 = new Bird('Marley');
console.log(bird01, bird02, bird03)
console.log(bird01.numLegs, bird02.numLegs, bird03)
console.log(bird01 instanceof Bird)

console.log(bird01.hasOwnProperty('name'))
console.log(bird01.hasOwnProperty('age'))



let joe = {
    name: 'Joey',
    height: 20
}



let smallJoe = Object.create(joe);
// smallJoe.prototype.height = 33
smallJoe.eat = () => 'EaT!'
console.log(smallJoe.height)

console.log(smallJoe.constructor === Object)


function biggerBedBugs(name) {
    this.name = name;
    this.age = 20
}


biggerBedBugs.prototype = {
    constructor: biggerBedBugs,
    age: 21
}



let xBed = new biggerBedBugs('x');
// console.log(xBed.constructor)



function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = 4
};

Animal.prototype = {
    constructor: Animal,
    describe: function () {
        console.log("My name is ");
    },
    color: 'Red'
};


let Horse = Object.create(Animal.prototype)
let Fly = new Animal()




console.log(Horse.color)



/* 
for (let prop in Horse) {
    console.log('Hprse Property,', Horse[prop])
} */




// Object Oriented Programming: Add Methods After InheritancePassed
// A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

// For example, Bird is a constructor that inherits its prototype from Animal:

// function Animal() { }
// Animal.prototype.eat = function() {
//   console.log("nom nom nom");
// };
// function Bird() { }
// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;
// In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

// Bird.prototype.fly = function() {
//   console.log("I'm flying!");
// };
// Now instances of Bird will have both eat() and fly() methods:

// let duck = new Bird();
// duck.eat(); // prints "nom nom nom"
// duck.fly(); // prints "I'm flying!"
// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.


function Animal() {}
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog() {

}

// Only change code below this line


Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = () => {
    console.log('Woof!')
}
Dog.prototype.constructor = Dog;

console.log(Dog.prototype)
// console.log(Dog.constructor)
// Only change code above this line

let beagle02 = new Dog();
console.log(beagle02.constructor);
console.log(beagle02.eat());




// ** **/

function Bird() {}

Bird.prototype.fly = function () {
    return "I am flying!";
};

function Penguin(color, size, dateofBirth) {
    this.color = color;
    this.size = size;
    this.dateofBirth = dateofBirth;
}


Penguin.prototype = Object.create(Bird.prototype);


console.log(Object.keys(Penguin))
console.log(Penguin.prototype.fly)


Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = () => "Alas, this is a flightless bird."


// Only change code above this line

let penguin = new Penguin(); // New gives access own properties
console.log(penguin.fly());
console.log(penguin.constructor);



for (let prop in penguin) {
    console.log(prop)
}



//* MIXINS UPGRADED/

let bird = {
    name: "Donald",
    numLegs: 2,
    foodPreferred: ['Ants', 'Other Insects']
};

let boat = {
    name: "Warrior",
    type: "race-boat",
    foodPreferred: ['Ants', 'Eggs']
};

// Only change code below this line

let newObject;

function eatMixin(...object) {
    // console.log (object)
    // let eat = ()=> 'Chew Beef'
    let eat = function () {
        return `We eat ${this.foodPreferred.join(' and ')}`
    }
    newObject = object.map((data) => {
            // console.log(Boolean(data.type)) 
            return {
                ...data,
                eat
            }
        }

    )
    // console.log (object.map( obj =>{ obj.eat = ()=> 'Eat and Eat'} )) 
}

eatMixin(bird, boat)
console.log(newObject[0])
console.log(newObject[0].eat())
console.log(newObject[1].eat())


// console.log (boat, bird)

// eatMixin(bird)
// eatMixin(boat);


/* console.log(boat)
console.log(bird) */


//** PRIVATE PROPERTIES WITH CLOSURE
function Bird() {
    let simplePassword = 'Hush123!!'
    let weight = 15; // Weight can be read only by child objects and changed only in
    // Bird(Parent) object 
    this.getPassword = function () {
        return simplePassword
    }
    this.getWeight02 = function () {
        return weight // getWieght allows childObjects readOnly accces "weight" 
        // private variable using closure
    }
}


// let bird = new Bird();
// console.log(bird.getPassword(), bird.constructor);




//* CREATING MODULES WITH IFFY with two Mixins
let myMotionModule = (
    function () {
        return {
            glide: (obj) => {
                obj.glide = () => 'Glide';
                return 'Called Glide Mixin'
            },
            run: (obj) => {
                obj.run = () => 'Run!'
                return 'Called Run Mixin'
            }
        }
    }
)()


let tinyObj01 = {}
let tinyObj02 = {}

console.log(myMotionModule.glide(tinyObj01))
console.log(myMotionModule.run(tinyObj02))
console.log(tinyObj01, tinyObj02)