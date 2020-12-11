var inputArray=[3,2,4,6,8,2,9,0,"apple","banana",78,0.7];
findOddElements(inputArray);
function findOddElements(inputArray)
{
    var oddItems=[];
    for(i=1; i<inputArray.length ; i+=2)
    {
        oddItems.push(inputArray[i]);
    }

    document.getElementById("result").innerHTML=oddItems;
}