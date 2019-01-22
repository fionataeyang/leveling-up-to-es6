class Car {
    constructor (speed) {
        this.speed = speed;
    }
    
    toString () {
        return `this car is slow; it only moves at ${this.speed} MPH`;
    }
}

class Porche911 extends Car {
    constructor (speed) {
        // TODO: Call the super constructor to pass a FAST speed of 100
        super(speed);
        this.speed = 100;
    }
    
    toString () {
        // TODO: overwrite the existing toString method to have it return 
        // 'this car is FAST'
        super.toString();
        return 'this car is FAST';
    }
}


const car = new Porche911(100);
car;
const string = car.toString();
string;