function BankAccount(accountNumber,accountHolderName,accountBalance)
{
    this.accountNumber=accountNumber;
    this.accountHolderName=accountHolderName;
    this.accountBalance=accountBalance;
}

BankAccount.prototype.getCurrentBalance=function(){
    return this.accountBalance;
}


//SAVINGS ACCOUNT
function Savings(accountNumber,accountHolderName,accountBalance,isSalary)
{
    BankAccount.call(this,accountNumber,accountHolderName,accountBalance);
    this.isSalary=isSalary;
}

Savings.prototype = new BankAccount();
Savings.prototype.withdraw =function(amount){
    if(this.accountBalance > 0)
    {
        this.accountBalance-=amount;
        return "Savings Acc. Amount deducted : " +amount;
    }
    else 
        return "Balance insufficient, amount cannot be withdrawn";
}

//CURRENT ACCOUNT
function Current(accountNumber,accountHolderName,accountBalance,odLimit)
{
    BankAccount.call(this,accountNumber,accountHolderName,accountBalance,odLimit);
    this.odLimit=odLimit;
}

Current.prototype = new BankAccount();
Current.prototype.withdraw= function(amount){
    if(this.accountBalance-amount >this.odLimit)
    {
        this.accountBalance-=amount;
        return "Current Acc. Amount deducted : " +amount;
    }
    else
        return "Odlimit reached, amount cannot be deducted."
}



var s1 = new Savings(1,'Alisha Kuvalekar',2000,true);
var c1 = new Current(1,'Nitin Kuvalekar',2500,1000);


//OUTPUT
console.log("Savings acc. balance :"+s1.accountBalance);
console.log("Current acc. balance :"+c1.accountBalance);
console.log(s1.withdraw(1500));
console.log(c1.withdraw(1000));
console.log("Savings acc. balance :"+s1.accountBalance);
console.log("Current acc. balance :"+c1.accountBalance);








