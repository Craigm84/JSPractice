
for (let i = 1; i <= 10; i++) {
console.log("Hello World")
}

for (let i = 1; i <= 100; i++) {

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

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}





