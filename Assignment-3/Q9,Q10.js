//Page 3: Question 2 and 3

function person(fname,lname,age,skills,dateofbirth,address,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;
}

//Question 9
var amithab=new person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sranalyst");
var abhisheik=new person("abhisheik",21,"HTML","08/06/1997","false","jr analyst");
abhisheik=Object.create(amithab);


//Question 10
var Aaradhya=new person("aaradhya",10,"JavaScript","10/01/2020","false");
Aaradhya=Object.create(abhisheik);


print=function()
{
console.log( "Amitabh :", amithab);
console.log("Abhishek's last name : " , abhisheik.lname);
console.log("Abhishek's Address : " , abhisheik.address);
console.log( "Aaradhya's last name: ", Aaradhya.lname);
console.log("Aaradhya's address: ", Aaradhya.address);
}();