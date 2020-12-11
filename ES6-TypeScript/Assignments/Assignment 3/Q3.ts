interface Printable{
    label:string;
    size:number;
}
function printAll(print: Printable){
    console.log(print.label);
    console.log(print.size);
    
}
let circle={size: 10, label: "Size Circle Object"};
printAll(circle);

let employee={size: 40, label: "Size Employee Object"};
printAll(employee);
