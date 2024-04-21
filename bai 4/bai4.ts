class Vehicle1 {
    protected name:string;
    protected speed:number;
    protected id:number;
    constructor(name:string,speed:number,id:number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount:number){
        this.speed -= amount;
    }
    speedUp(amount:number){
        this.speed += amount;
    }
    showSpeed(){
        console.log(`Tốc độ hiện tại: ${this.speed}`);
    }
}
class Bicycle extends Vehicle1{
    private gear:number;
    constructor(name:string,speed:number,id:number,gear:number){
        super(name,speed,id);
        this.gear = gear;
    }
}
let bicycle = new Bicycle("hoa",60,1,10);

bicycle.slowDown(10);
bicycle.showSpeed();

bicycle.speedUp(20);
bicycle.showSpeed();