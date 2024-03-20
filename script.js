let resultElement = document.getElementById("result");
let resultElement2 = document.getElementById("result2");
let messageElement = document.getElementById("message");
let userChoice = document.getElementById("user-choice");
let startButton = document.getElementById("start-button");
let resetButton = document.getElementById("reset-button");

resultElement.innerText = "..........";
resultElement2.innerText = "..........";

userChoice.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkMinimum();
    checkMaximum();
  }
});

startButton.addEventListener("click", () => {
  checkMinimum();
  checkMaximum();
});

resetButton.addEventListener("click", resetApp);

function checkMinimum() {
  if (!inputValidation()) return;
  let minimum = Infinity;

  let arrayToCheck = userChoice.value.split(",").filter(Boolean).map(Number);
  console.log(`Array to check is : ${arrayToCheck}`);
  console.log(`Type of arrayToCheck is : ${typeof arrayToCheck}`);

  for (let i = 0; i < arrayToCheck.length; i++) {
    console.log(`Current iteration is : ${i}`);
    console.log(`Current item checked is ${arrayToCheck[i]}`);

    if (minimum > arrayToCheck[i]) {
      minimum = arrayToCheck[i];
      console.log(`Current min value is : ${minimum}`);
    } else {
      console.log(`Current min value remain : ${minimum}`);
    }
  }
  resultElement.innerText = minimum;
  minimum = Infinity;
}

function checkMaximum() {
  if (!inputValidation()) return;
  let maximum = -Infinity;

  let arrayToCheck = userChoice.value.split(",").filter(Boolean).map(Number);
  console.log(`Array to check is : ${arrayToCheck}`);
  console.log(`Type of arrayToCheck is : ${typeof arrayToCheck}`);

  for (let i = 0; i < arrayToCheck.length; i++) {
    console.log(`Current iteration is : ${i}`);
    console.log(`Current item checked is ${arrayToCheck[i]}`);

    if (maximum < arrayToCheck[i]) {
      maximum = arrayToCheck[i];
      console.log(`Current min value is : ${maximum}`);
    } else {
      console.log(`Current min value remain : ${maximum}`);
    }
  }
  resultElement2.innerText = maximum;
  maximum = -Infinity;
}

function resetApp() {
  console.log(`App was reseting by user action !`);
  userChoice.value = "";
  resultElement.innerText = "..........";
  resultElement2.innerText = "..........";
}

function inputValidation() {
  if (userChoice.value === "") {
    console.log(`Invalid input, please enter some number !`);
    messageElement.innerText = "Invalid input, please enter some number !";
    setTimeout(() => {
      messageElement.innerText = "";
    }, 1500);
    return false;
  }
  return true;
}
