const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;

console.log(green); 

const organization={ Nm: 'Jacob' , address:{
    pincode: 400098
}
    };

const {Nm , address: {pincode}} = organization;
console.log(pincode);
