"use strict";
class Vehicle2 {
    constructor(speed, id) {
        this.speed = speed;
        this.id = id;
    }
    accelerate() {
        this.speed += 10;
    }
    generateId() {
        const randomId = Math.floor(Math.random() * 1000);
        this.id = randomId;
    }
    getId() {
        this.generateId(); // Gọi phương thức private từ bên trong lớp
        return this.id;
    }
}
class Car extends Vehicle {
    drive() {
        this.accelerate(); // Có thể truy cập phương thức protected từ lớp con
        console.log(`Current speed: ${this.speed}`); // Có thể truy cập thuộc tính protected từ lớp con
        // this.generateId(); // Không thể truy cập phương thức private từ lớp con
        // console.log(`ID: ${this.id}`); // Không thể truy cập thuộc tính private từ lớp con
    }
}
// Tạo một thực thể từ lớp Car
const car = new Car(0, 1);
car.drive();
