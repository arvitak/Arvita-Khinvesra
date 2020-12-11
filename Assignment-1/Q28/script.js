function printSum()
{
    var num= document.getElementById("num").value;
    var sum=0;
    for(let i=0;i<=num;i++)
    {
        sum+=i;
    }
    document.getElementById("result").innerHTML="Sum of integers from 1 to "+num+" = "+sum;
}