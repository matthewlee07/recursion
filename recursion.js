/*what is the input to the program
what is the output of the program
what is the input to each recursive calls
what is the output of each recursive calls*/

//Counting Sheep
function countingSheep(num, count = 0){
    //input is a number
    //output is a number + string
    //basecase: stop if count equals num
    if (count > num) return;
    console.log(count+' Another sheep jumps over the fence');
    return countingSheep(num, count + 1)
    //recursive: return count + string
}

// countingSheep(5);

//Array Double
function doubleArray(array){
    const doubledIndex = 2*array[0];
    //basecase: stop when array.length===0
    if (!array.length) return [];
    // recursive: continue slice until end, 
    return [doubledIndex, ...doubleArray(array.slice(1))];
}

console.log(doubleArray([1, 2, 3]));

//Reverse String

//nth Triangular Number

//String Splitter

//Binary Representation

//Anagrams

//Animal Hierarchy

//Factorial

//Fibonacci

//Organization Chart

