function intros() {

    console.log("Hello my name is Craig");
    console.log("Hello my name is Ria");
    console.log("Hello my name is Joshua");
    console.log("Hello my name is Oliver");

}

// alert("Hello!")

// function intro(name) {
//     console.log("Hello!", "My name is", name);

// }

// intro("Craig");

function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("fizzbuzz");
    } else if (num % 3 === 0) {
        console.log("fizz");
    } else if (num % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(num);
    }

}

function sum(num, num2) {

    console.log("Sum", num + num2);
}

function subtract(num, num2) {
    console.log("Answer", num - num2);

}

function multiply(num, num2) {
    console.log("Answer", num * num2);

}

function divide(num, num2) {
    console.log("Answer", num / num2);

}

// receive an output without logging

function sum2(num, num2) {
    return (num + num2)
}

let addtest = sum2(12, 15);

console.log(addtest);

function subtract2(num, num2) {
    return (num - num2)
}

let subtracttest = subtract2(19, 15)

console.log(subtracttest);

function multiply2(num, num2) {
    return (num * num2)
}

let multiplytest = multiply2(7, 11)

console.log(multiplytest);

function divide2(num, num2) {
    return (num / num2)
}

let dividetest = divide2(45, 15)

console.log(dividetest);

function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return("fizzbuzz");
    } else if (num % 3 === 0) {
        return("fizz");
    } else if (num % 5 === 0) {
        return("buzz");
    } else {
        return(num);
    }}

    console.log(multiply2(sum2(3, 6), sum2(2, 4)));
    
    const addfunc = function (a, b) {
        return (a + b)
    }

    const subtractfunc = function (a, b) {
        return (a - b)
    }

    const multiplyfunc = function (a, b) {
        return (a * b)
    }

    const dividefunc = function (a, b) {
        return (a / b)
    }

    const shortcuta = (a, b) => a + b;
    const shortcuts = (a, b) => a - b;
    const shortcutm = (a, b) => a * b;
    const shortcutd = (a, b) => a / b;
