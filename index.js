// document.getElementById("count-el").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

//function increment () {
   // console.log("The button was clicked")
//}

let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEL)

function increment() {
    console.log("clicked")
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
//let saveEL = document.getElementById("save-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

//let name = "Michael Gillespie"
//let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
//saveEl.innerText = greeting + name

