class Employee1 {
    name:string;
    age:number;
    constructor (name:string,age:number){
        this.name = name;
        this.age = age;
    }
    printInfo(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
class Manager1 extends Employee1 {
    department:string;
    constructor(name:string,age:number,department:string){
        super(name,age);
        this.department = department;
    }
    printInfo() {
        super.printInfo();
        console.log(`Department: ${this.department}`);
    }
}
let manager1 = new Manager1("minh thu",30,"Sales");
manager1.printInfo();