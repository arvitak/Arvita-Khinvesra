function mergeAlternate(a,b)
{
    var minLength= Math.min(a.length,b.length);
    var merged=[];
    for(let i=0;i<minLength;i++)
    {
        merged.push(a[i],b[i]);
    }

    merged.push(...a.slice(minLength), ...b.slice(minLength));
    return merged;
}


var array1=[1,2,3];
var array2=['a','b','c'];
var result=[];
result= mergeAlternate(array1,array2);

document.getElementById("result").innerHTML+= result;