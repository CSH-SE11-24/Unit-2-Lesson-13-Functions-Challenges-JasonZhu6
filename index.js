// FUNCTION 1: Welcomer
// Define a function called greeting that takes a name as a parameter and console logs "Hello " + name
function greeting(name) {
  console.log(`Hello, ${name}. `)
}

// Call the greeting function with your name as the argument
greeting("Jason")

// Prompt the user to enter their name
let user = prompt("Enter your name: ")

// Call the greeting function and pass in the user's name as an argument.
greeting(user)

// -------------------------------------------------
// FUNCTION 2: Adder
// Define a function called add that takes two numbers as parameters and returns the sum
function add(num1, num2) {
  let sum = num1 + num2
  return sum
}

// Call the add function and pass in any two numbers to test. Console log it (either directly or through a variable)! 
console.log(add(1, 2))

// Prompt the user to enter one number
let userNum1 = parseInt(prompt("Enter the first number: "))

// Prompt the user to enter another number
let userNum2 = parseInt(prompt("Enter the second number: "))

// Call the add function and pass in the user's numbers. Console log it (either directly or through a variable)! 
console.log(add(userNum1, userNum2))

// Notice how the value that printed just put the numbers next to each other instead of adding them. That's because they're both strings!
// Use parseInt() on both of the user's numbers to make them into numbers (you can re-assign existing variables or declare new ones)

// Already did!!

// Call the add function with the parsed number values from the user. Console log it and check that the math works correctly!







// -------------------------------------------------
// FUNCTION 3: Calculator (Extra Credit)
// Define a function called takes in 3 parameters: operation, number1, and number2
// The function should use if/else if/else statements on the operation parameter to perform the correct calculation on the two numbers
// You should support "add", "subtract", "multiple", and "divide" operations
function calculator(operation, number1, number2) {
  if (operation == "add" || operation == "+") {
    console.log(number1 + number2)
  } else if (operation == "subtract" || operation == "-") {
    console.log(number1 - number2)
  } else if (operation == "multiply" || operation == "*") {
    console.log(number1 * number2)
  } else if (operation == "divide" || operation == "/") {
    console.log(number1 / number2)
  }
}

// Test it out with at least 2 different functions calls
calculator("add", 1, 2)
calculator("subtract", 2, 1)
