function on_all(inputArray, isPerfectSquare)
{
    for(let i=0 ; i<inputArray.length ; i++)
    {
        if(isPerfectSquare(inputArray[i]) === true)
        {
            perfectSquares.push(inputArray[i]);
        }
    }
    return perfectSquares;
}

function isPerfectSquare(n)
{
    return Math.sqrt(n) % 1 === 0;
}


var inputArray=[4,2,1,9,16,81,56,34,21,12,18,36,49
               ,64,100,39,3,121,144,169,196,225,256,
               221,92,15,289,324,76,41,361,400];
var perfectSquares=[];
document.getElementById("result").innerHTML+= on_all(inputArray,isPerfectSquare);

//document.getElementById("result").innerHTML=isPerfectSquare(21);
