let sampleObj = {
    name: 'Ellis',
    course: () => 'Admin'
}


let hello = ({
    name,
    course
}) => course(); // 'Admin'
// console.log(name, course)

console.log(hello(sampleObj))

class Bagget {
    constructor(origin) {
        this.origin = origin
    }
}


// Concise Object Literal with Shorthand ObjectProperty 

const createPerson = (name, age, gender) => {
    "use strict";
    // Only change code below this line

    let togoBagget = new Bagget('Togo');
    return {
        name,
        baggetCountry: togoBagget.origin,
        age,
        gender
    };
    // Only change code above this line
};


console.log(createPerson().baggetCountry)




class Book {
    constructor(author) {
        this._author = author;
        this._age = 11
    }

    get writer() {
        return this._author;
    }

    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }


}


let myNewBook = new Book('Ellis');
let myNewBookNo2 = new Book('Joe');





console.log(myNewBookNo2);
console.log('Checking Static: ', Book._age);