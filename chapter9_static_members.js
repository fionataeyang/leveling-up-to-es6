class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static setName(person, name) {
        person.name = name; // person means pass in the object
    }
}

const person = new Person('bob', 20);
person; // ​​​​​Person { name: 'bob', age: 20 }​​​​​
Person.setName(person, 'hello'); // change person's name
person; // ​​​​​Person { name: 'hello', age: 20 }​​​​​