'use strict';
/*what is the input to the program
what is the output of the program
what is the input to each recursive calls
what is the output of each recursive calls*/

//Counting Sheep
function countingSheep(num, count = 0) {
    //input is a number
    //output is a number + string
    //basecase: stop if count equals num
    if (count > num) return;
    console.log(count + ' Another sheep jumps over the fence');
    return countingSheep(num, count + 1);
    //recursive: return count + string
}

// countingSheep(5);

//Array Double
function doubleArray(array) {
    const doubledIndex = 2 * array[0];
    //basecase: stop when array.length===0
    if (!array.length) return [];
    // recursive: continue slice until end, 
    return [doubledIndex, ...doubleArray(array.slice(1))];
}

//Reverse String
function reverseString(string) {
    //base case
    if (!string.length) return '';
    //ending character of the new string
    const newString = string[0];
    //recursive
    return reverseString(string.slice(1)) + newString;
}

//nth Triangular Number
function triangularNumber(n) {
    //base case
    if (n === 0) return;
    return n + triangularNumber(n - 1);
}

//String Splitter
function splitString(string, separator) {
    //base case: stop at end of string
    if (!string.length) return '';
    //recursive: charAt(0), sperator, splitString()
    return string.charAt(0) + separator + splitString(string.slice(1), separator);
}

// Binary Representation
// function cutTwos(num) {
//     if (num === 1) return "1";

//     if (32 < num && num-32 !== 1) {
//         return "1" + cutTwos(num - 32);
//     }
//     if (16 < num && num-16 !== 1) {
//         return "1" + cutTwos(num - 16);
//     }
//     if (8 < num && num-8 !== 1) {
//         return "1" + cutTwos(num - 8);
//     }
//     if (4 < num && num-4 !== 1) {
//         return "1" + cutTwos(num - 4);
//     }
//     if (2 < num && num-2 !== 1) {
//         return "1" + cutTwos(num - 2);
//     }
//     //define case for 0
//     else {
//         return "0" + cutTwos(num - 2);
//     }
// }

// function binary(num) {
//     if (num === 1) return 1;
//     if (128 < num) { return 10000000 + (binary(num - 128)); }
//     if (64 < num) { return 1000000 + (binary(num - 64)); }
//     if (32 < num) { return 100000 + (binary(num - 32)); }
//     if (16 < num) { return 10000 + (binary(num - 16)); }
//     if (8 < num) { return 1000 + (binary(num - 8)); }
//     if (4 < num) { return 100 + (binary(num - 4)); }
//     if (2 < num) { return 10 + (binary(num - 16)); }
// }

function binary(num) {
    // basecase
    if (num < 1) return '';
    // if num is even concat binary to 0 
    if (num % 2 === 0) return binary(num / 2) + "0" ;
    if (num % 2 !== 0) return binary(Math.floor(num / 2)) + "1";
}

console.log(binary(29));
//Anagrams

//Animal Hierarchy

//Factorial

//Fibonacci

//Organization Chart

