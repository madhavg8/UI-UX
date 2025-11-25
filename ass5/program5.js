
function processArray(arr) {
    var evenNumbers = arr.filter(function(num) {
        return num % 2 === 0;
    });
    console.log("After filter (even only):", evenNumbers);
   
    var doubled = evenNumbers.map(function(num) {
        return num * 2;
    });
    console.log("After map (doubled):", doubled);
    
    var sum = doubled.reduce(function(total, num) {
        return total + num;
    }, 0);
    console.log("After reduce (sum):", sum);
    
    return sum;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array:", numbers);
var result = processArray(numbers);
console.log("Final result:", result);
