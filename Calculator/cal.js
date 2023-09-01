let num1 = parseFloat(prompt("Enter the first number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter the second number:"));
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero!";
    }
    break;
  default:
    result = "Invalid operator";
}
alert("Result: " + result);
alert (" Thank your using calculator : Prep by. Zahid Hussain");
