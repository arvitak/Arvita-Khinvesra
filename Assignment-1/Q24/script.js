function giveAsterisks()
{
    var n1,n2,n3;
    n1=prompt("Enter first number");
    while( isNaN(n1) || n1<=0 || n1>31)
    {
        alert("Enter valid number");
        n1=prompt("Enter first number");
    }
    
    n2=prompt("Enter second number");
    while( isNaN(n2) || n2<=0 || n2>31)
    {
        alert("Enter valid number");
        n2=prompt("Enter first number");
    }

    n3=prompt("Enter third number");
    while( isNaN(n3) || n3<=0 || n3>31)
    {
        alert("Enter valid number");
        n3=prompt("Enter first number");
    }
    star="*";

    var arr=[];
    arr.push(star.repeat(n1),star.repeat(n2),star.repeat(n3));
    return arr;
}

var results=[];
results=giveAsterisks();
document.getElementById("result").innerHTML= 
    "Output: <br> "+results[0] +" <br>" +results[1]+"<br>"+results[2];