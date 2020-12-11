
function digits()
{
    var num=document.getElementsByTagName("input").value;
    var res=digitsArray(num);
    document.getElementById("result").innerHTML="The array: " +res;
}

function digitsArray(n){
    var arr=n.split('').map(Number);
    return arr;
}

