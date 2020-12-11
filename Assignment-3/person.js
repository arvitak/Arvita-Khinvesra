var person={
    firstName: 'Alisha',
    lastName:'Kuvalekar'
};


//Question 4

console.log("Firstname: " +person['firstName']);
console.log("LastName: " +person.lastName);

person.lastName='K';
console.log("Changed LastName: " +person.lastName);


//Question 5

//console.log(person.middleName) //error : undefined
person.middleName='Umesh';      //adding new property : middlename
console.log("MiddleName: "+person.middleName);

