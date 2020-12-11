function add (a=2, b = 1) {
    return a+b 
  }
  
  console.log(add(5,2));
   
  
  function userFriends (username, ...friends){
  console.log(friends[1]);
  console.log(username,friends);
   }
   userFriends("Harry","Ben","Jerry","Lara");
  
  
    
   let printcapitalNames=(...m) =>
   {
       for(let i in m)
       {console.log(m[i].toUpperCase());}
   };
   
   let display=["Harry","Ben","Jerry","Lara"];
   printcapitalNames(...display);
   