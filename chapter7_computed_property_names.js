const key = 'lastname';
let greeting = 'greeting';

function getKey() {
    return "hello";
}

let person = {
    firstname: 'Bob', 
    [key]: 'harvey',
    ['age']: 20,
    [getKey()+ 'zzz' + greeting]: 'testing'

}

person;