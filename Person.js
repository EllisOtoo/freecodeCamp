class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    returnBasicInfo() {
        return `This person's name is ${this.name}  and age as${this.age}`
    }
}



module.exports = Person;