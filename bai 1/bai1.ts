class Employees {
    name:string;
    protected company:string;
    private phone:string;
    constructor (name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(){
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class Manager extends Employees {
    teamSize:number;
    constructor(name:string,company:string,phone:string,teamSize:number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
let employee1 = new Employees("minh thu","ABC company","01234567");
employee1.printInfo();

let manager = new Manager("hoa","XYZ company","0123456",5);
manager.printInfo();
console.log(`Team size: ${manager.teamSize}`);