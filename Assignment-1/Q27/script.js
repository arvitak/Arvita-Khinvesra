function padChars()
{
     let finalString="";
     let num=document.getElementById("input").value;
     let character=document.getElementById("character").value;
     for(let i=0;i<num;i++)
     {
        finalString+=character;
     }
     document.getElementById("result").innerHTML ="Concatenated string: "+finalString
}