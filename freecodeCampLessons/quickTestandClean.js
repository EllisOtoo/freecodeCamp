let range = []

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        range.push(startNum)
        // return range;

    } else {
        console.log(startNum);
        range.push(startNum)
        startNum++;
        rangeOfNumbers(startNum, endNum);
    }
    return range
};


// console.log(rangeOfNumbers(4, 4));
// console.log(rangeOfNumbers(5, 20));
// console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(1, 5));
// console.log("Returned from Function: ", range);



// *JS  Recursion to Create a Range of Numbers
// let range = [];

// function rangeOfNumbers(startNum, endNum) {
//     if (startNum === endNum) {
//         range.push(startNum)

//     } else {
//         console.log(startNum);
//         range.push(startNum)
//         startNum++;
//         rangeOfNumbers(startNum, endNum);
//     }
//     return range;
// };


// TESTS

// rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
// Passed
// rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
// Passed
// rangeOfNumbers(4, 4) 

class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        // return this.fahrenheit
        return 5 / 9 * (this.fahrenheit - 32);
    }

    // Setter to set from celsius to update fahrenheit
    set temperature(celsius) {
        this.fahrenheit = c * 9.0 / 5 + 32
    }
}