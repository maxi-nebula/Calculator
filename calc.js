/** @format */
const numberButtons = document.querySelectorAll(".button");
const resultDiv = document.querySelector(".result");
//let enteredNumbers = [];

let numberEntered = "";
let operator = "";
let isOperator = false;
let operatorArray = ["+", "-", "/", "*", "%", "="];
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    identifyInput(item.innerText, operatorArray);
    displayNumber(item.innerText);
  });
});

displayNumber = (number) => {
  numberEntered = numberEntered + number;

  resultDiv.innerText = numberEntered;
};

identifyInput = (input, array) => {
  if (array.includes(input)) performOperation(input);
};

performOperation = (operator) => {
  switch (operator) {
    case "+":
      console.log("add");
      break;
    case "-":
      console.log("subtract");
      break;
    case "/":
      console.log("divide");
      break;
    case "*":
      console.log("multiply");
      break;
    case "%":
      console.log("modulo");
      break;
    case "=":
      console.log("perform operations");
      break;
  }
};
