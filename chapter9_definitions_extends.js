// var Person = function (name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   Person.prototype.jump = function () {
//       console.log('jump');
//     }
// const person = new Person('bob', 20);

// person;
// person.jump();
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    jump() {
        console.log('jump');
    }
}

//   Person.prototype.jump = function () {
//       console.log('jump');
//     }
const person = new Person('bob', 20);

person;
// person.jump();

class Employee extends Person {
    constructor(name, age, years) {
        super(name, age); // inherit Person's constructor
        this.year = years;
    }
    quit() {
        console.log('I quit my job');
        this.year = 0;
    }
    jump() {
        console.log('jump really high');
        // this jump function will be overrided Person's jump function 
    }
}

const employee = new Employee('bob', 20, 10);
employee; // ​​​​​Employee { name: 'bob', age: 20, year: 10 }​​​​​
employee.jump(); // jump really high​​​​​
employee.quit(); // ​I quit my job
employee; // ​​​​​Employee {name: 'bob', age: 20, year: 0 }​​​​​