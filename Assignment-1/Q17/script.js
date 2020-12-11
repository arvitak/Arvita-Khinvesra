function mergeSort(a,b)
{
    var sorted=[];
    sorted.push(...a, ...b);
    sorted.sort(function(a,b){return a-b});
    return sorted;
}

var array1=[1,4,6];
var array2=[2,3,5];

document.getElementById("result").innerHTML+= mergeSort(array1,array2);