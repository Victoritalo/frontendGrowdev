"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    username;
    balance;
    constructor(username, balance) {
        this.username = username;
        this.balance = balance;
    }
    withdraw(withdrawAmount) {
        if (withdrawAmount > this.balance) {
            return `Withdraw amount is higher than your current Balance. Please, review your transaction and try again. Current balance: ${this.balance} ${console.log(this.balance)}`;
        }
        else {
            const currentBalance = this.balance - withdrawAmount;
            return `Saque realizado com sucesso! balance atual ${currentBalance}`;
        }
    }
    deposit(depositAmount) {
        if (depositAmount < 5 || !depositAmount) {
            return `Deposit amount should be at least R$ 5,00.`;
        }
        else {
            this.balance += depositAmount;
            return `Operation successful! Deposit amount: ${depositAmount}. Current balance: ${this.balance}`;
        }
    }
}
exports.Wallet = Wallet;
