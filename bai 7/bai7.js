"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Không đủ tiền.");
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        let interest = this.balance * this.interestRate;
        this.deposit(interest);
        return interest;
    }
}
let savingAccount = new SavingsAccount("12345678", 1000, 0.05);
let interest = savingAccount.calculateInterest();
console.log(`Tiền lãi hàng tháng là: ${interest}`);
savingAccount.deposit(500);
let updateInterest = savingAccount.calculateInterest();
console.log(`Tiền lãi hàng tháng sau khi gửi thêm tiền là: ${updateInterest}`);
