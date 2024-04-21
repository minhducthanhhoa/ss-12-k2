class Account {
    protected accountNumber:string;
    protected balance:number;
    constructor (accountNumber:string,balance:number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount:number){
        this.balance += amount;
    }
    withdraw(amount:number){
        if(amount <= this.balance){
            this.balance -= amount;
        } else {
            console.log("Không đủ tiền.");
        }
    }
}
class SavingsAccount extends Account {
    private interestRate:number;
    constructor(accountNumber:string,balance:number,interestRate:number) {
        super(accountNumber,balance);
        this.interestRate = interestRate;
    }
    calculateInterest(){
        let interest = this.balance * this.interestRate;
        this.deposit(interest);
        return interest;
    }
}

let savingAccount = new SavingsAccount("12345678",1000,0.05);

let interest = savingAccount.calculateInterest();
console.log(`Tiền lãi hàng tháng là: ${interest}`);

savingAccount.deposit(500);

let updateInterest = savingAccount.calculateInterest();
console.log(`Tiền lãi hàng tháng sau khi gửi thêm tiền là: ${updateInterest}`);