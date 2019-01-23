// starts with
// ES5
// const message = 'hello world';
// const substring = 'hello';
// const startsWith = message.indexOf(substring) == 0; // true
// ES6
const startsWith = 'hello world'.startsWith('hello');

startsWith;

// ends with
// ES5
// const endsWith = 'hello world'.indexOf('world') === 'hello world'.length - 'world'.length; // true
// const message = 'hello world';
// const substring = 'world';
// const endsWith = message.indexOf(substring) === message.length - substring.length; // true

// ES6
const endsWith = 'hello world'.endsWith('world'); // true
endsWith;

// includes
// ES5
// const index = 'hello world'.indexOf('world'); // 6

// ES6
const index = 'hello world'.includes('world'); // true
index;