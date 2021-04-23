//      Write a program that reads 5 Random 3 Digit values 
//             and then outputs the minimum and the maximum value
let max=0;min=999;
for (i = 0; i<5; i++) {
let number = Math.floor(Math.random() * 900) + 100;
console.log("number="+number);
 if(number > max) {
     max = number;
 }
 if(number < min) {
     min = number;
 }
}
console.log("minimum value  =  "+min);
console.log("maximum value  =  "+max);

//    Write a program that takes day and month from the command line and prints 
//                true if day of month is between March 20 and June 20, false otherwise.
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter month date",function(month, date) {    
    if((month == "3" && date >= "20") || (month == "6" && date <= "20")) 
        console.log("True")
    else if (month > "3" && month < "6") 
        console.log("True")
    else
    console.log("False")
    process.exit();
});

//Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year.
//                        A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter year",function(year) {
   let y = year%4;
   let r = year%100;
   let t = year%400;
   if((y == 0 && r != 0) || t==0)
   console.log("leap year")
   else
   console.log("not a leap year") 
    process.exit();
});

//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
let chance = Math.floor(Math.random() * 10) %2 +1;
if(chance == 1)
console.log("Heads")
else
console.log("Tails")
