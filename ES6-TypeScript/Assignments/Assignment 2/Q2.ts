



function Armstrong (){
    let a;
    let b;
    return{

    next: function myArmstrong() {
        
    
    for(let i = 0; i <= 153; i++){
        
        
        let numberOfDigits = i.toString().length;
        let sum = 0;
        
         x = i;

    
    while (x > 0) {

        let remainder = x % 10;
        sum += remainder ** numberOfDigits;
       
        x = parseInt(x / 10);
    }
    if(sum==i){
        console.log(i);
    }
}
    }
}
};
      
        
    

    let getNextArmstrong = Armstrong();
    console.log(getNextArmstrong.next());
    
