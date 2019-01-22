const obj = {
    * myGenerator() {
        yield* [1,2,3];
        yield 'hello'
    }
}
const iter = obj.myGenerator();
console.log([...iter]); // [1,2,3,'hello']
console.log(iter.next()); // ​​​​​{ value: 1, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 2, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 3, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 'hello', done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: undefined, done: true }​​​​​
console.log(iter.next().done); // ​​​​​true ​​​​
console.log([...iter]); // [] after finished iteration
