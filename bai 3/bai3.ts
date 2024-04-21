class Person1 {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    displayInfo(){
        console.log(`Name: ${this.name}`);
    }
}
class Student2 extends Person1{
    id:number;
    constructor(name:string,id:number){
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
}
let student4 = new Student2("minh thu",1);
student4.displayInfo();