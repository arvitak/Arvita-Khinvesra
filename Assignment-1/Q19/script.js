function changeBase(arr,base1,base2)
{
    if(base2 >=2 && base2 <=36)
    {
        var newArray=[];
        for( var i=0 ; i<arr.length; i++)
        {
            if(arr[i]!==undefined)
                newArray[i]= parseInt(arr[i]>0?arr[i]:arr[i] >>>0, base1).toString(base2);
        }
    }
    return newArray;
    
}

var arr=[1,15,0];
var b1=10;
var b2=2;
document.getElementById("result").innerHTML= "Input Array: "+arr+ "<br>Current base: "+b1+  
                                            "<br>New base:"+b2+"<br>Array elements with changed base: "+changeBase(arr,b1,b2);