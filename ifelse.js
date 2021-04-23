//Read a single digit number and write the number in word
let value =Math.floor(Math.random()*10);
console.log("for value  : "+value+" Day is :");
if(value==0)
console.log("zero")
else if(value==1)
console.log("one")
else if(value==2)
console.log("two")
else if(value==3)
console.log("three")
else if(value==4)
console.log("four")
else if(value==5)
console.log("five")
else if(value==6)
console.log("six")
else if(value==7)
console.log("seven")
else if(value==8)
console.log("eight")
else if(value==9)
console.log("nine")
else
console.log("oops!!")

//Read a Number and Display the week day (Sunday, Monday,...)
let value =Math.floor(Math.random()*10)%7;
console.log("for value  : "+value+" Day is :");
if(value==0)
console.log("sunday")
else if(value==1)
console.log("monday")
else if(value==2)
console.log("tuesday")
else if(value==3)
console.log("wednesday")
else if(value==4)
console.log("thursday")
else if(value==5)
console.log("friday")
else if(value==6)
console.log("saturday")
else
console.log("oops!!");

//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter value in unit format 1,10,100,1000 etc  : ", function (value) {
if(value==1)
console.log("unit");
if(value==10)
console.log("Ten");
if(value==100)
console.log("Hundread");
if(value==1000)
console.log("Thousand");
process.exit();
}); 

//Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
//  1. a + b * c                3. c + a / b
//                2. a % b + c                4. a * b + c
let a =(Math.floor(Math.random()*10)%10)+1;
let b =(Math.floor(Math.random()*10)%10)+1;
let c =(Math.floor(Math.random()*10)%10)+1;
console.log("values for A : "+a+" B : "+b+" C : "+c);

let operation1 = Math.floor(a+b*c);
let operation2 = Math.floor(a%b+c);
let operation3 = Math.floor(c+a/b);
let operation4 = Math.floor(a*b/c);

console.log(" a+b*c = "+operation1);
console.log(" a%b+c = "+operation2);
console.log(" c+a/b = "+operation3);
console.log(" a*b/c = "+operation4);

if(operation1<operation2 && operation1<operation3 && operation1 <operation4)
console.log(" minimum is "+operation1);
else if(operation2<operation1 && operation2<operation3 && operation2 <operation4)
console.log(" minimum is "+operation2);
else if(operation3<operation1 && operation3<operation2 && operation3 <operation4)
console.log(" minimum is "+operation3);
else if(operation4<operation1 && operation4<operation3 && operation4 <operation3)
console.log(" minimum is "+operation4);

if(operation1>operation2 && operation1>operation3 && operation1 >operation4)
console.log(" Maximum is "+operation1);
else if(operation2>operation1 && operation2>operation3 && operation2 >operation4)
console.log(" Maximum is "+operation2);
else if(operation3>operation1 && operation3>operation2 && operation3 >operation4)
console.log(" Maximum is "+operation3);
else if(operation4>operation1 && operation4>operation3 && operation4 >operation3)
console.log(" Maximum is "+operation4);
