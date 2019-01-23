// Check the number is out of the boundary or not, and it's not interger.
console.log(Number.isSafeInteger(1e1000000000)); // false
console.log(Number.isSafeInteger(9999.11)); // false
console.log(Number.isSafeInteger(9999)); // true