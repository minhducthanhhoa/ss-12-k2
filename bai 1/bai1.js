"use strict";
class Employees {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class Manager extends Employees {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
let employee1 = new Employees("minh thu", "ABC company", "01234567");
employee1.printInfo();
let manager = new Manager("hoa", "XYZ company", "0123456", 5);
manager.printInfo();
console.log(`Team size: ${manager.teamSize}`);
