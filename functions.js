// 1. Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
var tripleFive = function() {
    for (var i = 0; i <= 3; i++) {
        console.log('Five!');
    }
}

tripleFive();


// 2. Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
var lastletter = function(word) {
    console.log(word.slice(-1));
}

console.log(lastletter('Hello'));
console.log(lastletter('Island'));


// 3. Write a function called 'square' which takes a single argument which is a number, and returns number * number.
var square = function(number) {
    console.log(number * number);
}

square(12);


// 4. Write a function called 'negate' which takes a single number argument and returns the negative of that number.
var negate = function(num) {
    return num * (-1);
}

console.log(negate(-5));
console.log(negate(8));


// 5. Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
var toArray = function(i, j, k) {
    var arr = [];
    arr.push(i, j, k);
    return arr;
}

console.log(toArray(1,4,5));
console.log(toArray(8,9,10));


// 6. Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
var startsWithA = function(str) {
    if (str[0] === 'A') {
        return true;
    } else {
        return false;
    }
}

console.log(startsWithA('Adam'));
console.log(startsWithA('Bear'));


// 7. Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
var excite = function(str) {
    return str + '!!!';
}

console.log(excite('Adam'));
console.log(excite('Aardvark'));


// 8. Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
var sun = function(str) {
    if (str.indexOf('sun') === (-1)) {
        return false;
    } else {
        return true;
    }
}

console.log(sun('Hello, sunshine!'));
console.log(sun('Hello, World!'));


// 9. Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
var tiny = function(num) {
    if (num === 0 || num === 1) {
        return true;
    }
}

console.log(tiny(1));

// 10. Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
var getSeconds = function(time) {
    var min = time.slice(0,2);
    var sec = time.slice(3,5);
    
    min = parseInt(min, 10);
    sec = parseInt(sec, 10);
    
    return (min * 60) + sec;
}

console.log(getSeconds('53:45'));
console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));