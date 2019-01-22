const arr = [1];

var [number, b=1000] = arr;
number; // 1
b; // 1000


const obj = {
    isOn: true,
    // amount: 10
}

var {
    isOn: isServerOn,
    amount = 2000
} = obj;

isServerOn; // true
amount; // 2000


/* Testing Quiz */

const [first, ,third] = "Hello sweet world".split(' ');
first; // hello
third; // world


const {
    name,
    age,
    gender = 'm',
    hairColor: color
} = {
    name: 'bob',
    age: 20,
    hairColor: 'blue'
}
console.log(name, age, gender, color); // bob, 20, m, blue