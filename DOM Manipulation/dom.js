const newHeading = document.createElement("h1");

newHeading.textContent = "First Heading"

document.body.appendChild(newHeading)

newHeading.style.color = "white";
newHeading.style.backgroundColor = "black"
const newParagraph = document.createElement("p");

newParagraph.textContent = "First Paragraph"

document.body.appendChild(newParagraph);

for (let i = 1; i <= 10; i++) {
    let words = document.createElement("p")
    words.textContent = i
    document.body.appendChild(words)

    if (i % 2 === 0) {
        words.style.color = "red"
    } else words.style.color = "green";
    words.style.backgroundColor = "yellow"
}

function sections(a, b) {
    const para = document.createElement(a);
    para.textContent = b
    document.body.appendChild(para);

}

sections("p", "Hello")

function toggledark() {
    if (document.body.className === "light") {
        document.body.className = "dark"

    } else if (document.body.className === "dark") {
        document.body.className = "light"
    }
}

const mystyle = document.getElementById("mystyle");

mystyle.style.fontWeight = "Bold";

const mystyle2 = document.getElementById("mystyle2");

const newP = document.createElement("p");
newP.textContent = "My Style 2";

mystyle2.appendChild(newP);
