const a = {
    skills : {
        running: true
    }
}
const b = {
    name: 'bob',
    age: 10,
    job: 'developer',
    location: 'San Francisco',
    skills: {
        swiming: true
    }
}
const c = {
    hasAdog: true
}

// Object.assign(a, b, c);
Object.assign(...[a ,b, c]);
a;
/* { skills: { swiming: true },​​​​​
​​​​​  name: 'bob',​​​​​
​​​​​  age: 10,​​​​​
​​​​​  job: 'developer',​​​​​
​​​​​  location: 'San Francisco',​​​​​
​​​​​  hasAdog: true }​​​​​
*/