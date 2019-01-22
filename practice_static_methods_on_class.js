class Car {
    constructor (speed, value) {
        this.speed = speed;
        this.value = value;
    }
    
    static getSpecs (car) {
        // TODO: this should return a string with the value and speed of the car object passed in
        return `${car.speed} and ${car.value}`;
    }
}