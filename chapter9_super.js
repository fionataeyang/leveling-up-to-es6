class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    jump() {
        console.log('jump');
    }
}

class Employee extends Person {
    constructor(name, age, years) {
        super(name, age); // inherit Person's constructor
        this.year = years;
    }
    getName() {
        return super.getName() + '!' ;
    }
    jump() {
        super.jump(); // super will get the parent's func
        console.log('jump really high');
        // this jump function will be overrided Person's jump function 
    }
}

const employee = new Employee('bob', 20, 10);
employee.jump(); // 1.jump  2.jump really high​​​​​, use super to inherit Person's jump()
const name = employee.getName();
name; // bob!