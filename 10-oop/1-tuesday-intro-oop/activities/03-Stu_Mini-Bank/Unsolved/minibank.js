function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = () => this.balance;
  this.printBalance = () => console.log(`Balance: ${this.getBalance()}`);
}
