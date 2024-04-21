class Product {
    protected name:string;
    protected price:number;
    constructor(name:string,price:number){
        this.name = name;
        this.price = price;
    }
    getDescription(){
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}
class Electronics extends Product{
    private brand:string;
    constructor(name:string,price:number,brand:string){
        super(name,price);
        this.brand = brand;
    }
    getDescription() {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
let electronic = new Electronics("hong",100000,"Gạo");
electronic.getDescription();