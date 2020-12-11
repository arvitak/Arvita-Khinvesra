class Account{
    constructor(Id, name, balance){
     this.Id=Id;
        this.name=name;
        this.balance=balance;
        console.log(`Name: ${name} , Id: ${Id} , Balance: ${balance}`);
        
    }

static totalbalance(...accounts){
    let sum =0;
    for(let i of accounts){
        sum += i.balance;
        
    }
    console.log(`Total balance is: ${sum}`);
    
}
}
class SavingsAccount extends Account{
    constructor(Id,name,balance,interest){
        super(Id,name,balance);
        this.interest= interest;
       
     
     
    }
}
class CurrentAccount extends Account{
    constructor(Id,name,balance,cashcredit){
        super(Id,name,balance);
        
        this.cashcredit=cashcredit;
       
    }}

    let savings1= new SavingsAccount(1,"Ben",4000,6);
    let savings2= new SavingsAccount(2,"Harry",3000,8);
    let current1= new CurrentAccount(3,"Sara",8000,5);
    let current2= new CurrentAccount(4,"Clark",7000,7);

    let total=Account.totalbalance(savings1,savings2,current1,current2);
    console.log(savings1,savings2,current1,current2);
    