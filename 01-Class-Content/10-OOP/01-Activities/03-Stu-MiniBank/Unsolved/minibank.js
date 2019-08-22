function createMiniBank() {
  var balance = 25;
  var statement = [balance];

  function getBalance() {
    return balance;
  }

  function setBalance(value) {
    balance = value;
  }

  function updateStatement(value) {
    statement.push(value);
  }

  function getStatement() {
    return statement.slice(0);
  }

  function printStatement() {
    var statement = getStatement();

    for (var i = 0; i < statement.length; i++) {
      console.log(`${i + 1}. ${statement[i]}`);
    }
  }

  function deposit(value) {
    if (typeof value !== "number" || value < 1 || value > 5000) {
      throw Error("Deposits must be numbers over 1 and less than 5000");
    }

    var newBalance = getBalance() + value;
    setBalance(newBalance);
    updateStatement(value);
  }

  function withdraw(value) {
    if (typeof value !== "number" || value > getBalance()) {
      throw Error("Withdrawals must be numbers and not exceed the current balance.");
    }

    var newBalance = getBalance() - value;
    setBalance(newBalance);
    updateStatement(-value);
  }

  function printBalance() {
    console.log("Balance: " + getBalance());
  }

  return { printBalance, printStatement, deposit, withdraw };
}

var bank = createMiniBank();
bank.printBalance();
bank.deposit(40);
bank.printBalance();
bank.withdraw(20);
bank.printStatement();
bank.printBalance();
