let num;

// do {
//     num = prompt("Gimme a number from one to ten.");
// } while (!(num <= 10 && num >=1));
// console.log("Num:", num);


// console.log("Out of scope?", num);

for (let i = 1; i <= 100; i++) {
    console.log("Hello, World!");
} 

// make an array of characters
let chars = ['a', 'b', 'c', 'd', 'e'];
// print out each element in the array
console.log(chars[0]);
console.log(chars[1]);
console.log(chars[2]);
console.log(chars[3]);
console.log(chars[4]);


// prints each element in a loop
// start -> 0 -> first index
// stop -> 5 -> length - 1
for (let i = 0; i <= 4; i++) {
    console.log(chars[i]);
}
// better to use the length of the array as it will always be accurate
for (let i = 0; i < chars.length; i++) {
    console.log(chars[i]);
}

for (let i = chars.length - 1; i >= 0; i--) {
    console.log(chars[i]);
}



// enhanced for loop
// part 1
let sum = 0
for (let num = 1; num <=10; num++) {
console.log(sum+=num);
}

let arr = [1 ,2 ,3 , 4, 5, 6, 7];

// part 2
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let tot = 0
arr = [1 ,2 ,3 , 4, 5, 6, 7]

console.log("Sum", sum)
console.log("Num"), num;

for (let i = 0; i < arr.length; i++) {
console.log(tot += arr[i])
}

// part 3
console.log("For of Loop");
for  (let number of arr) {
console.log(number);
}
console.log("Sum")

let total = 0
arr = [1 ,2 ,3 , 4, 5, 6, 7]
for (let i = 0; i < arr.length; i++) {
    console.log(total += arr[i])
}

console.log("Next Example");

sum = 0
let nums = [2,4,6,8,10,12,14,16,18,20];

for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    (let i = 0; i <nums.length; i++) 
         let sum += nums[i];
    
    }


console.log(i);
