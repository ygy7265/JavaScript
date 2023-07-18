class Account{
    constructor(bank,id,name,balance){
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(money){
        this.balance += money;

    }
    withdraw(money){
        this.balance -= money;
    }

    show(){
        document.write('<p>');
        document.write('bank name = ' + this.bank + '<br>');
        document.write('bank id = ' + this.id + '<br>');
        document.write('name = ' + this.name + '<br>');
        document.write('balance = ' + this.balance + '<br>');
    }
}