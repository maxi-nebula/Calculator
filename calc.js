/** @format */
const numberButtons = document.querySelectorAll(".button");
const resultDiv = document.querySelector(".result");
//let enteredNumbers = [];

let numberEntered = "";
let operator = "";
let isOperator = false;
let operatorArray = ["+", "-", "/", "*"];
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    displayNumber(item.innerText);
  });
});

displayNumber = (number) => {
  numberEntered = numberEntered + number;
  console.log(numberEntered);

  resultDiv.innerText = numberEntered;
};
