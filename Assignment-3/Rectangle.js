function Rectangle(width,height)
{
    this.width=width;
    this.height=height;
}

//Question 1
var rect1=new Rectangle(4,5);
var rect2=new Rectangle(10,20);
var rect3=new Rectangle(20,10);

console.log( "Rect 1:"+`${rect1.width} ${rect1.height}`);
console.log( "Rect 2:" +`${rect2.width} ${rect2.height}`);
console.log( "Rect 3:" +`${rect3.width} ${rect3.height}`);

rect1.height=10;
console.log( "Changed Rect height:"+`${rect1.width} ${rect1.height}`);


//Question 2
Rectangle.prototype.getArea=function(){
    return this.width*this.height;
};

console.log('Rect 1 Area: '+rect2.getArea());

// Question 3
//Rectangle r =new Rectangle(4,5); // <--Error here, cannot instantiate like Other Object oriented languages. 
//r.height =50;
//console.log(r.getArea());