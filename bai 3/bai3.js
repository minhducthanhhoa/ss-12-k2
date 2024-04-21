"use strict";
class Person1 {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student2 extends Person1 {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
}
let student4 = new Student2("minh thu", 1);
student4.displayInfo();
