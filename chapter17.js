// Set()
const set = new Set([1,2,3,3,3,3,3,3]);
set; // ​​​​​Set { 1, 2, 3 }​​​​​
set.add(10);
// set.clear(); // clear everything inside of array
// set.add(100);
// set; // Set { 100 }
// set.delete(3);

set; // ​​​​​Set { 1, 2, 3, 10 }​​​​​ 
console.log(set.has(3)) // true
console.log(set.has(5)); // false
console.log(set.keys()); // { [Iterator] }​​​​​
console.log([...set.keys()]) // [1, 2, 3, 10 ]
console.log([...set.values()]) // [1, 2, 3, 10 ]

set.forEach( value => { 
        console.log(value); // 1, 2, 3, 10
    }
)

for (let value of set) {
    value; // 1, 2, 3, 10
}
// const entries = set.entries();
// entries; // { [Iterator] }​​​​​ 
 
const entries = [...set.entries()];
entries; // ​​​​​[ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 10, 10 ] ]​​​​​

for (let [value] of entries) {
    value; // 1, 2, 3, 10
}


// Map()
const map = new Map([
    ['my special key', 10],
    ['my another key 2', {}]
]);
map.set('key3', true)
console.log(map); // ​​​​​Map { 'my speical key' => 10, 'my another key 2' => {}, 'key3' => true }​​​​​

const entries1 = map.entries();
console.log(entries1); // ​​​​​{ [Iterator] }​​​​​ 

for ( let [key, value] of entries1) {
    console.log(key); // ​​​​​my speical key​​​​​, my another key 2, key3
    console.log(value); // 10, {}, true
}

map.forEach( (value, key) => {
    console.log(value); // 10, {}, true
    console.log(key); // ​​​​​my speical key​​​​​, my another key 2, key3
})

console.log(map.has('key3')); // true
console.log(map.has(10)); // false
console.log(map.get('my special key')); // 10
console.log([...map.values()]) // ​​​​​[ 10, {}, true ]​​​​​
console.log([...map.keys()]) // ​​​​​​​​​​[ 'my special key', 'my another key 2', 'key3' ]​​​​​

map.clear();
console.log(map); // Map { }
