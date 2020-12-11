function rotate(inputArray,k)
{
    var temp =inputArray.splice(k,inputArray.length-1);
    inputArray.unshift(temp);
    return inputArray;

}

var test=[1,2,3,4,5];
var k=2;

document.getElementById("result").innerHTML+= rotate(test,k);