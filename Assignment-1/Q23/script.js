
function findCelsius()
{
    var input = document.getElementById("Fahrenheit").value;
    var celsius;
    if(input == "")
    {
        alert("Please give an input");
    }
    else if(isNaN(input))
    {
        alert("Please enter a number");
    }
    else
    {
        celsius=(((input-32)*5)/9);
        document.getElementById("result").innerHTML = celsius + " degree Celsius.";
    }
}


    

