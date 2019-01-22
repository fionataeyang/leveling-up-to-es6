// function* myGenerator() {
//     console.log('a');
//     yield 1;
//     console.log('b');
//     yield 2;
//     console.log('c');
//     yield 3;
//     console.log('d');
//     yield 4;
// }

// const iter = myGenerator();

// iter; // ​​​​​{ [Iterator] }​​​​​ 
// console.log(iter.next()); // ​​​​​{ value: 1, done: false }​​​​​
// console.log(iter.next()); // ​​​​​{ value: 2, done: false }​​​​​
// console.log(iter.next()); // ​​​​​{ value: 3, done: false }​​​​​
// console.log(iter.next()); // ​​​​​{ value: 4, done: false }​​​​​
// console.log(iter.next()); // ​​​​​{ value: undefined, done: true }​​​​​



function* myGenerator() {
    console.log('a');
    yield 1;
    return;
    console.log('b');
    yield 2;
    console.log('c');
    yield 3;
    console.log('d');
    yield 4;
}

const iter = myGenerator();

iter; // ​​​​​{ [Iterator] }​​​​​ 
console.log(iter.next()); // ​​​​​{ value: 1, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: undefined, done: true }​​​​​
console.log(iter.next()); // ​​​​​{ value: undefined, done: true }​​​​​
console.log(iter.next()); // ​​​​​{ value: undefined, done: true }​​​​​
console.log(iter.next()); // ​​​​​{ value: undefined, done: true }​​​​​