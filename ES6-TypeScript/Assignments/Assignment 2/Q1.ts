let previousno=Symbol('pno');
let currentno=Symbol('cno');
class Fibonacci{
    constructor(){
        this[previousno]=0;
        this[currentno]=1;
    }
    next(n){
        let final;
        for(let i=0;i<n;i++){
            console.log(this[previousno]);
            final=this[previousno]+this[currentno];
            this[previousno]=this[currentno];
            this[currentno]=final;
            
        }
    return final;
    }
};
let f=new Fibonacci();
console.log(f.next(8));


