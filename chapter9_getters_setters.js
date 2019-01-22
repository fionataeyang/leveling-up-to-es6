class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name () {
        return this._name + "!";
    }

    set name (name) {
        this._name = name;
    }

}

const person = new Person('bob', 20);
// const name = person.name;
// name; // bob!
person.name = 'alex';
person; // ​​​​​Person { _name: 'alex', _age: 20 }​​​​​