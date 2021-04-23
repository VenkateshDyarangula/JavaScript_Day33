//Write a program that takes a command-line argument n and 
// prints a table of the powers of 2 that are less than or equal to 2^n.

let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter (n)th number ",function(n) {    
    for(i = 1; i <= n; i++)
    {
        result = 2 * i;
        console.log("2 x "+ i +" = "+ result)
    }
    process.exit();
});


//Write a program that takes a command-line argument n and 
// prints the nth harmonic number. Harmonic Number is of the form.

let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter (n)th number ",function(n) {    
    var result = 0;
    var string = null;
    for(i = 1; i <= n; i++)
    {
         result = result + 1/i;
         string = string + " + 1/"+i;
    }
    console.log("H(n) = "+string+" = "+result);
    process.exit();
});

//Write a program that takes a input and determines if the number is a prime.

let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter a number ",function(n) {    
   var k = n;
   var flag = 0;
    for(i = 2; i < n; i++)
    { if(k % i == 0)
        flag++;
    }
    if(flag >= 1)
    console.log(n + " is not a prime number");
    if(flag == 0)
    console.log(n + " is a prime number");
    
    process.exit();
});

/*Extend the program to take a range of number as input and output the Prime
Numbers in that range.*/

const readline = require('readline-sync');
let startNumber = readline.questionInt("Enter starting number: ");
let endNumber = readline.questionInt("Enter ending number: ");
for (let i = startNumber; i <= endNumber; i++) {
	let prime = true;
	for (let j = 2; j <= Math.sqrt(i); j++) {
		if (i % j == 0) {
			prime = false;
			break;
		}
	}
	if (prime && i != 1) {
		console.log(i);
	}
}

//Write a program that computes a factorial of a number taken as input.
//    5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter (n)th number ",function(number) {    
    let factorial=1;
    for(let i=1;i<=number;i++){
        factorial *= i;
    }
    console.log("Factorial of number "+number+" is:"+factorial);
    process.exit();
});

/* Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.*/
  
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter  your number to find the factors of the number: ",function(number) { 

for(let i = 2; i <= number; i++){
    if(number % i == 0){
        let isPrime=1;
        for(j = 2; j <= i/2; j++){
            if(i % j == 0){
                isPrime = 0;
                break;
            }
        }
        if(isPrime == 1){
            console.log(i);
        }
    }
}
process.exit();
});
