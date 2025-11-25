

var numbers = [34, 8, 56, 21, 12];

console.log("Array:", numbers);

var largest = Math.max.apply(null, numbers);
var smallest = Math.min.apply(null, numbers);

console.log("Largest:", largest);
console.log("Smallest:", smallest);

var ascending = numbers.slice().sort(function(a, b) { return a - b; });
console.log("Ascending:", ascending);

var descending = numbers.slice().sort(function(a, b) { return b - a; });
console.log("Descending:", descending);
