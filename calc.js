/** @format */
const numberButtons = document.querySelectorAll(".button");
const resultDiv = document.querySelector(".result");
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
  resultDiv.innerText = "";
  console.log(numberEntered);
  numberEntered = "";
  queueArray = [];
};

identifyInput = (dNum, opArray, cItem) => {
  if (opArray.includes(cItem)) {
    pushNum = dNum.substring(0, dNum.length - 1);
    console.log(pushNum);
    queueArray.push(pushNum);
    console.log(queueArray);

    //resultDiv.innerText = "";
    if (cItem == "=") {
      performOperation(cItem, queueArray);
    }
  }
  //performOperation(input);
};

performOperation = (operator, qArray) => {
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
      let result = eval(`${qArray[qArray.length - 1]}`);
      console.log(result);
      resultDiv.innerText = result;

      break;
  }
};
