//DOM MANIPULATION IN JAVASCRIPT
console.log("script linked")

const MAIN_URL="https://bild.de"
const divElement = document.getElementById("element")
console.log("h1Element", divElement)

const newElement = document.createElement("h1")
newElement.innerText = "mein neues h1 element"
newElement.style.color = "red"

divElement.append(newElement)

const secondElement = document.createElement("h2")
secondElement.innerText = "zweites element"
secondElement.style.color = "green"
divElement.append(secondElement)
