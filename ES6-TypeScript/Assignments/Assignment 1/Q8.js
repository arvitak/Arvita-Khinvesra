var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(Id, name, balance) {
        this.Id = Id;
        this.name = name;
        this.balance = balance;
        console.log("Name: " + name + " , Id: " + Id + " , Balance: " + balance);
    }
    Account.totalbalance = function () {
        var accounts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accounts[_i] = arguments[_i];
        }
        var sum = 0;
        for (var _a = 0, accounts_1 = accounts; _a < accounts_1.length; _a++) {
            var i = accounts_1[_a];
            sum += i.balance;
        }
        console.log("Total balance is: " + sum);
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(Id, name, balance, interest) {
        var _this = _super.call(this, Id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(Id, name, balance, cashcredit) {
        var _this = _super.call(this, Id, name, balance) || this;
        _this.cashcredit = cashcredit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var savings1 = new SavingsAccount(1, "Ben", 4000, 6);
var savings2 = new SavingsAccount(2, "Harry", 3000, 8);
var current1 = new CurrentAccount(3, "Sara", 8000, 5);
var current2 = new CurrentAccount(4, "Clark", 7000, 7);
var total = Account.totalbalance(savings1, savings2, current1, current2);
console.log(savings1, savings2, current1, current2);
