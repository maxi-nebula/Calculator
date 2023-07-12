/** @format */
const numberButtons = document.querySelectorAll(".button");
const resultDiv = document.querySelector(".result");
const expressionDiv = document.querySelector(".expression");

//let enteredNumbers = [];

let numberEntered = "";
let operator = "";
let queueArray = [];
let isOperator = false;
let operatorArray = ["+", "-", "/", "*", "%", "="];
let disNumber = "";
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    disNumber = displayNumber(item.innerText);
    //console.log(item.innerText);
    identifyInput(disNumber, operatorArray, item.innerText);

    if (item.innerText == "AC") {
      clearScreen();
    }
  });
});

displayNumber = (number) => {
  if (number == "AC") {
    clearScreen();
    return 0;
  } else {
    numberEntered = numberEntered + number;

    resultDiv.innerText = numberEntered;
    return numberEntered;
  }
};

clearScreen = () => {
  resultDiv.innerText = "0";
  expressionDiv.innerText = "";
  console.log(numberEntered);
  numberEntered = "";
  queueArray = [];
};

identifyInput = (dNum, opArray, cItem) => {
  if (opArray.includes(cItem)) {
    pushNum = dNum.substring(0, dNum.length - 1);

    queueArray.push(pushNum);
    console.log(queueArray);

    //resultDiv.innerText = "";
    if (cItem == "=") {
      performOperation(queueArray, dNum);
    }
  }
};

performOperation = (qArray, dNum) => {
  let result = eval(`${qArray[qArray.length - 1]}`);
  //let expression = qArray[qArray.length - 1];
  resultDiv.innerText = result;

  addExpression(dNum);
};

addExpression = (dNum) => {
  const newtext = document.createTextNode(dNum);
  const p1 = document.getElementById("expressiondiv");

  p1.appendChild(newtext);
};
