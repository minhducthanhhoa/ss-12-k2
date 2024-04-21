"use strict";
class Vehicle1 {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại: ${this.speed}`);
    }
}
class Bicycle extends Vehicle1 {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bicycle = new Bicycle("hoa", 60, 1, 10);
bicycle.slowDown(10);
bicycle.showSpeed();
bicycle.speedUp(20);
bicycle.showSpeed();
