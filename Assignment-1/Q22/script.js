            function toPiglatin()
            {
                var text=document.getElementById("text").value;
                var inputArray=text.split(" ");
                var newString="";
                for( var i=0; i<inputArray.length; i++)
                {
                    var inputString=inputArray[i];
                    newString=inputString.substring(1) + inputString.substring(0,1)  + "aq";
                    inputArray[i]=newString;
                }
                var res= inputArray.join(" ");
                document.getElementById("result").innerHTML= "Pig latin: "+ res;
            }

            function toEnglish()
            {
                var text=document.getElementById("text").value;
                var inputArray=text.split(" ");
                var res="",temp="", firstLetter="";
                for( var i=0; i<inputArray.length; i++)
                {
                    temp=inputArray[i];
                    
                    temp=temp.substring(0,temp.length-2);  //remove 'aq'
                    firstLetter=temp.substring(temp.length-1);  //extract the last character
                    result= firstLetter + temp.substring(0,temp.length-1); //new english translation
                    inputArray[i]=result;
                }
      
                
                var res= inputArray.join(" ");
                document.getElementById("result").innerHTML= "English:  "+ res;

            }