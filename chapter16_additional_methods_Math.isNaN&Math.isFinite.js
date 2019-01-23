// isNaN is not a number
var i;
i++;
i;
console.log(Number.isNaN(i)); // true

// isFinite - checks if a number if infinte or not
var i = 1/0;
i; // Infinity

console.log(i === Infinity || i === -Infinity); // true
console.log(Number.isFinite(i)); // false