function createMiniBank() {
  var balance = 0;
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
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number!");
    }

    var newBalance = getBalance() + value;
    setBalance(newBalance);
    updateStatement(newBalance);

    console.log(`Deposited ${value}!`);
  }

  function withdraw(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number");
    }

    var newBalance = getBalance() - value;

    if (newBalance < 0) {
      throw new Error("Insufficient funds for this transaction");
    }

    setBalance(newBalance);
    updateStatement(-value);

    console.log(`Withdrew ${value}!`);
  }

  function printBalance() {
    console.log(`Balance: ${getBalance()}`);
  }

  return { printBalance, printStatement, deposit, withdraw };
}

var bank = createMiniBank();
bank.printBalance();

bank.deposit(85);
bank.printBalance();

bank.withdraw(20);
bank.printBalance();

bank.printStatement();
