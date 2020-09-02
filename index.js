let fetch = require('node-fetch');
let path = require('path');
let fs = require('fs');
let events = require('events');
let https = require('http');

function justTestingServerEvent() {
    console.log(`Just Testing Server`)
}
let oneEmitter = new events.EventEmitter();
oneEmitter.on('serverStarted', justTestingServerEvent);

// Create emitter object from events object Class method

let server = https.createServer(function (req, res) {
    oneEmitter.emit('serverStarted')
    res.write('Hello');
    res.end()
});

server.listen(8000)




let Person = require('./Person');
let Amy = new Person('Amy', 21);


console.log(Amy.returnBasicInfo());
// file Extenstion Name
console.log(path.extname(__filename))

// Path fileName only 
console.log(path.basename(__filename));


console.log(path.join(__dirname, 'freeCodeCampLessons'))


//File Path object:
console.log(path.parse(__filename))


function logToABillion() {
    let x = 0;
    do {
        x++;
    } while (x < 100000000)
    console.log('Just finished Running CallBack')
}


function callThisFirst(callBack) {
    console.log('Done')
}
// callThisFirst(logToABillion());


let callThis = () => {
    console.log('Call This Run')
}



/* setTimeout(
    () => {
        console.log(`Just Run`);
        setTimeout(

            callThis,
            2000
        )
        console.log('This should run before CallThis')
    }, 5000
) */


// console.log('I run');
// fetch('https://code.visualstudio.com/').then(() => console.log('Hello'))


// let data = fs.readFileSync('./sample.txt');
let data = fs.readFile('./sampe.txt', (err, data2) => {
    if (err) {
        console.error(err)
    }
    // console.log(data2.toString())
});
// console.log(data.toString());


function testAsync() {
    console.log('Alpha');

    setTimeout(
        function () {
            console.log('Seta');
        }, 1000)

    console.log('Gamma')
}

testAsync();



// Algorithm
// Find box
// Get apples
// PutApples into box
// If Box is full, Get New Box and Add appples

let firstBox = [],
    apples = [1, 2, 3, 45, 6, 77, 899, 9, 0];


function putApplesIntoBox(box) {
    if (box.length == 5) {
        let newArray = [];
        newArray.push
    }
    firstBox.push()
    return putApplesIntoBox();
}


putApplesIntoBox



let printNumTwo;

/* for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = (function () {
            return i;
        });
    }
}
*/




for (let i = 0; i < 3; i++) {
    if (i === 2) {
        function returnedThis() {
            return i;
        }
    }
}


console.log(returnedThis());

// console.log('PrintNum Variable: ', printNumTwo())


function main() {
    let A = 33;

    function findA() {
        return A
        console.log('Function A: ', A)

    }
    findA();
}


main();




let newFile = fs.createReadStream('./sample.txt', function (err, data) {
    if (err) {
        console.log(err)
    }
});


function logSth() {
    console.log('Im a handler');
    oneEmitter.emit('anotherEvent')
}


function logAnotherString() {
    console.log('Handler triggered from one source event')
}


oneEmitter.on('test', logSth)


oneEmitter.emit('test');
oneEmitter.on('anotherEvent', logAnotherString);
console.log(__dirname);


let a = 8,
    b = 6;
// Only change code below this line


// Destructure existing Array literal values into new variables
let [x, y, z] = [1, 23, 5]
// let [b,a] = [a,b];
// let x = [a, b];
[b, a] = [a, b];
console.log(x, y); // Check error with x and y values