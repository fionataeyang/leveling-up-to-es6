
// let person = {
//     firstname: 'Bob',
//     age: 20,
//     happyBirthday: function() {
//         return this.age++;
//     }
// }
var person = {
    firstname: 'Bob',
    lastname: 'harvey',
    age: 20,
    happyBirthday() {
        return this.age++;
    },
    greeting() {
        return `Hello ${this.firstname}`; // this can get.
    },
    bron(city) { 
        return `${this.firstname} was bron in ${city}.` 
    }
}

person.happyBirthday();
console.log(person.greeting());
console.log(person.bron('New York'));

person;