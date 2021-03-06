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
function factorial(n) {
    //base 
    if (n === 1) return 1;
    //recursive
    return n * factorial(n-1);
}
console.log(factorial(5));

//Fibonacci
function fibonacci(n=n-1) {
    //base
    if (n <= 2) return 1;
    return fibonacci(n-2) + fibonacci(n-1);
}

console.log(fibonacci(15));

//Organization Chart

const OrgChart = [
    {id: 'Zuckerberg', 'Parent': null},
    {id: 'Schroepfer', 'Parent': 'Zuckerberg'},
    {id: 'Bosworth', 'Parent': 'Schroepfer'},
    {id: 'Zhao', 'Parent': 'Schroepfer'},
    {id: 'Steve', 'Parent': 'Bosworth'},
    {id: 'Richie', 'Parent': 'Zhao'}
];

function traverse(OrgChart, parent) {
    let node = {};
    OrgChart.filter(person => person.Parent === parent)
            .forEach(person => node[person.id] = traverse(OrgChart, person.id));
    return node;
}

console.log(JSON.stringify(traverse(OrgChart, null), null, 2));