export class Wallet {
  username: string
  balance: number;
  constructor(username: string, balance: number) {
    this.username = username;
    this.balance = balance;
  }
  withdraw(withdrawAmount: number) {
    if(withdrawAmount > this.balance) {
        return `Withdraw amount is higher than your current Balance. Please, review your transaction and try again. Current balance: ${this.balance} ${console.log(this.balance)}`
        
    } else {
        const currentBalance = this.balance - withdrawAmount
        return `Saque realizado com sucesso! balance atual ${currentBalance}`
    }
  }
  deposit(depositAmount: number) {
    if(depositAmount < 5 || !depositAmount) {
      return `Deposit amount should be at least R$ 5,00.`
    }
    else{
      this.balance += depositAmount
      return `Operation successful! Deposit amount: ${depositAmount}. Current balance: ${this.balance}`
    }
  }
}
