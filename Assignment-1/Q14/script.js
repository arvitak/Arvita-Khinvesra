    function sumUsingFor(input)
    {
        for(var i=0; i<input.length; i++)
            {
                sum+=input[i];
            }
                return sum;
    }

    function sumUsingWhile(input)
    {
                
        var i=0;
        sum=0;       
        while(i<input.length)
                
        {
        sum+=input[i];
         i++;
        }
        return sum;
    }

    function sumUsingRecursion(input)
    {
            if(input.length===0)
            {
                 return 0;
            }
            else 
            {
                return input[0] + sumUsingRecursion(input.slice(1));
            }
    }

    var input=[1,2,3,4,5,6,7,8,9];
    var sum=0;

    document.getElementById("result").innerHTML+= "Using for :" +(sumUsingFor(input)) +" <br>";
    document.getElementById("result").innerHTML+= "Using while :"+(sumUsingWhile(input)) +"<br>";
    document.getElementById("result").innerHTML+= "Using recursion :"+(sumUsingRecursion(input));



