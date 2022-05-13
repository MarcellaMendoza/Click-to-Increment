// get count field from html document
let countElement = document.getElementById("count-element")

// get text field from document
let savedElement = document.getElementById("saved-element")

// is called by both functions
// modified only by increment()
// saved by save()
let count = 0

function increment() {
  count = count + 1
  countElement.innerText = count
  console.log(count)
}

function save() {
  console.log(count)

}

// intialize the count as 0.
// listen for clicks on the increment button.
// increment the count variable when the button is clicked (log it out).
// change the count-element in the HTML to reflect the new count.