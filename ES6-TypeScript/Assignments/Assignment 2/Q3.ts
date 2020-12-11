function* Armstrong (){
    yield "start";
    let a;
    let b;
    
    
        
    
    for(let i = 0; i <= 2000; i++){
        
        
        let numberOfDigits = i.toString().length;
        let sum = 0;
        
         x = i;

    
    while (x > 0) {

        let remainder = x % 10;
        sum += remainder ** numberOfDigits;
       
        x = parseInt(x / 10);
        if(i> 1000){
            yield "Error:No number Above 1000";
        }
    }
    if(sum==i){
        console.log(i);
        
    }
    
}

    };
  
    let getNextArmstrong = Armstrong();
    console.log(getNextArmstrong.next().value);
    console.log(getNextArmstrong.next().value);
    