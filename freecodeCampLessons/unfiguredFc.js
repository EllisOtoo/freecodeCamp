// 1) Usernames can only use alpha-numeric characters.

// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// 3) Username letters can be lowercase and uppercase.

// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

//* Incomplete Options
// 10/11 let userCheck = /^[a-z][a-z]+[0-9]*$/i; // Change this line
// 10 // let userCheck = /^[a-z]+[0-9]*[\w][0-9]*$/i; // Change this line

let userName = 'JackOfAllTrades'
let userCheck = /^[a-z]([a-z]|[0-9])+[0-9]*$/i; // Change this line
let result = userCheck.test(userName);



// FC Solutions:
//
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let result = userCheck.test(username);


// Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [0-9][0-9]+ - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input