
for (let i = 0; i < 10; i++) {
console.log("Hello World")
}

for (let i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
};

const arr=[1, 2, 3, 4, 5, 6];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}





