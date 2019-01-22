function* fibonacci() {
    let n1 = 0;
    let n2 = 1;
    while(true) {
        let current = n1;
        n1 = n2;
        n2 = current + n1;
        let reset = yield current;
        if (reset) {
            n1 = 0;
            n2 = 1;
        }
    }
}

const iter = fibonacci();
iter; // ​​​​​{ [Iterator] }​​​​​ 

console.log(iter.next()); // ​​​​​{ value: 0, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 1, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 1, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 2, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 3, done: false }​​​​​
console.log(iter.next(true)); // ​​​​​{ value: 0, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 1, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 1, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 2, done: false }​​​​​
console.log(iter.next()); // ​​​​​{ value: 3, done: false }​​​​​
console.log(iter.next()); //​​​​​ { value: 5, done: false }​​​​​