console.log(1);
console.log(2);
console.log(3);
if (false) {
    console.log(4);
}
console.log(5);
console.log(6);

let num = "Cameron";

// Check condition
if (typeof num !== "Number") {
    // If condition not met then this runs
    console.log("I Want a Number");
    // If previous condition is false but this one is true
} else if (num % 2 === 0) {
    // Runs if even
    console.log("Even");
    // Runs if all previous are false
} else {
    console.log("Odd");
}

num = 8;

if (num 10 > && num % 2 == 0); {
console.log("Num is greater than 10 AND even")
} else if(num > 10 || num % 2 == 0); {
    console.log("Num is greater than 10 OR even")
} 
else console.log("Num is neither greater than 10 or even")