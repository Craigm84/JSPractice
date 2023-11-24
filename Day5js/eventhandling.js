function hello() {
    alert("Hello")
}

function conslog() {
    console.log("Hello");

}
function addText() {
    const myP = document.getElementById("myP");
    myP.textContent = "Hi, it worked";
}

function clickCounter() {
    const plus1 = document.getElementById("plus1")
    plus1.value++;

}

function add1() {
    const count = document.getElementById("count");
    count.value ++

}

function minus1() {
    const count = document.getElementById("count");
    count.value --

}

function reset() {
    const count = document.getElementById("count");
    count.value = 0
}

function minus5() {
    const count = document.getElementById("count");
    count.value  -=5

}

function add5() {
    const count = document.getElementById("count");
    count.value  -=-5;

    // count.value = +count.value + 5;
// simpler format
}

