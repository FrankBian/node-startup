var events = require('events');
function Account() {
    this.balance = 0;
    events.EventEmitter.call(this);

    this.deposit = function(amount)
    {
        this.balance += amount;
        this.emit("balanceChanged");
    }
    ;
    this.withdraw = function(amount)
    {
        this.balance -= amount;
        this.emit("balanceChanged");
    }
    ;
}

Account.prototype.__proto__ = events.EventEmitter.prototype;

function displayBalance(){
    console.log("Account balance : $%d", this.balance);
}

function checkOverDraw(){
    if (this.balance < 0){
        console.log("Account overdraw!!!");
    }
}

function checkGoal(account,goal){
    if (account.balance > goal){
        console.log("Goal Achieved!");
    }
}

var account = new Account();
account.on("balanceChanged",displayBalance);
account.on("balanceChanged",checkOverDraw);
account.on("balanceChanged",function () {
    checkGoal(account,1000);
});

account.deposit(300);
account.deposit(440);
account.deposit(456);
account.withdraw(1200);

