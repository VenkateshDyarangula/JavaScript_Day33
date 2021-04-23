//Write a function to check if the two numbers are Palindromes
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter a number ",function(num) {    
  // Checks if the number is palindrome or not
function PalindromCheck(num) {
	let number = num;
	let isPalindrom = true;
	let rem, temp, final = 0;
	temp = num;
	while (number > 0) {
		rem = number % 10;
		number = parseInt(number / 10);
		final = final * 10 + rem;
	}
	if (final != temp) {
		isPalindrom = false;
	}
	return isPalindrom;
}
if (PalindromCheck(num)) {
	console.log("the Number is palindrome ")
} else {
	console.log("the Number is not palindrome ")
}
    process.exit();
});

/* Take a number from user and check if the number is a Prime then show
that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime */
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter a number ",function(num) {    
 
// Checks if the number is prime or not
function PrimeCheck(num) {
	let number = num;
	let isPrime = true;
	if (number == 1) {
		console.log("1 is neither prime nor composite number.");
		isPrime = false;
	}
	else if (number > 1) {
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				isPrime = false;
				break;
			}
		}
	}
	return isPrime;
}
// Checks if number is palindrome or not
function PalindromCheck(num) {
	let number = num;
	let isPalindrom = true;
	let rem, temp, final = 0;
	temp = num;
	while (number > 0) {
		rem = number % 10;
		number = parseInt(number / 10);
		final = final * 10 + rem;
	}
	if (final != temp) {
		isPalindrom = false;
	}
	return isPalindrom;
}
if (PalindromCheck(num)) {
	if (PrimeCheck(num)) {
		console.log("the Number is palindrom and prime")
	} else
		console.log("the Number is palindrom but not prime")
} else
	console.log("the Number is not palindrom")


    process.exit();
});

/* Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9  */

const readline = require('readline-sync');
console.log("ensure that the inputs are within the Freezing Point" +
    "(0 °C / 32 °F) and the Boiling Point of Water (100 °C / 212 °F)");
let temp_str = readline.questionInt("Enter temperature: ");
let temp = parseInt(temp_str);
// Converts farenheits to degree centigrades temperature
function farenheitToDegreeCentigrade(temp) {
	if (temp < 32 || temp > 212) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp is degC is: " + ((temp - 32) * (5 / 9)));
}
// Converts centigrades to farenheits temperature
function centigradeToDegreeFarenheit(temp) {
	if (temp < 0 || temp > 100) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp in degF is: " + ((temp * 9 / 5) + 32));
}
console.log("Enter y for F-C\n"+"Enter n for C-F");
if (readline.keyInYN("Enter your key:")) {
	farenheitToDegreeCentigrade(temp);
} else{
	centigradeToDegreeFarenheit(temp);
}
