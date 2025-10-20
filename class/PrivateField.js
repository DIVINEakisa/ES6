class BankAccount {
  #balance;
  username;
  constructor(username, balance) {
    this.username = username;
    this.#balance = balance;
  }
  withdraw() {
    console.log(`You withdraw ${this.#balance}`);
  }
  deposit() {
    console.log(`You deposit ${this.#balance}`);
  }
}
let bank = new BankAccount("Akisa", 230000);
bank.withdraw();
let ban = new BankAccount("Akisa", 220000);
ban.deposit();
