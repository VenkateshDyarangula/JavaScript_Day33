/*Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached.*/
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter your number",function(number) {    
    let i=0;
while(i<number){
    let power=2**i;
    i++;
    console.log("2 ^ "+ i +" = "+power);
    if(power==256){
        break;
    }
}
    process.exit();
});

//Extend the Flip Coin problem till either Heads or Tails wins 11 times.
let Head = 0, Tail = 0;
while (Head < 11 && Tail < 11) {
	let coin = Math.floor(Math.random() * 10) % 2;
	if (coin == 1) {
		Head++;
	} else {
		Tail++;
	}
}
console.log("Heads count: " + Head + " " + "Tails count: " + Tail);

/*Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made. */
let money = 100;
let win = 0;
let loose = 0;
while (money > 0 && money < 200) {
	let luck = Math.floor(Math.random() * 10) % 2;
	if (luck == 0) {
		loose++;
		money--;
	} else {
		win++;
		money++;
	}
}
console.log("final money: " + money);
console.log("total wins: " + win);
console.log("total loose: " + loose);

/* Find the Magic Number
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached..  */

console.log("choose a numer between 1 and 100");
const readline = require('readline-sync');
var lowest = 1;
var highest = 100;
var mid = 50;
var flag = 0;
while (lowest < highest) {
    console.log("enter 1 if number is b/w "+ lowest +" and " + mid)
    console.log("enter 2 if number is b/w "+ mid +" and " + highest)
    console.log("enter 3 if number is equal to "+ mid)
    let value = readline.questionInt();
    switch (value) {
        case 1:
          highest = mid - 1;
        break;
        case 2:
          lowest = mid + 1;
        break;    
        case 3:
          flag++;
        break;
        default:
          text = "oops! wrong choice";
        break;         
    }
    mid = parseInt((lowest + highest)/2);
    if(flag == 1){
        break;
    }
}
console.log("your value is = " + mid)
