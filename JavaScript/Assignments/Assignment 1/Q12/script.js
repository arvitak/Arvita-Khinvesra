
var tries= new Array();
var trialcount=0;

function guess()
{
    var secret=26;
    var userInput=document.getElementById("input").value;

    // for the no of tries
    if((tries.indexOf(userInput)) == -1)
    {   
        tries.push(userInput);
        trialcount++;
    }
    

    //checking the guess for the secret number
    if(userInput < secret)
    {
        document.getElementById('result').innerHTML="The secret number is bigger than your guess, try again!";
    }
    else if(userInput > secret)
    {
        document.getElementById('result').innerHTML="The secret number is smaller than the guess,trt again";
    }
    else
    {
        document.getElementById('result').innerHTML=`  Yay! you guessed it right. <br> <br> <b>The no of tries required: </b>${tries.length}` ;
    }


}

