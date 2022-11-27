const screen = document.querySelector(".container-screen_result");
const numbers = document.querySelectorAll(".number");
const decimal = document.querySelector(".decimal");
const makePercentage = document.querySelector(".percentage");
const operators = document.querySelectorAll(".symbol");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const hardReset = document.querySelector(".hardReset");


let displayValue = "0";
let currentNumber = Number(displayValue);
let prevNumber;
let operator = "";

//listener for number buttons
numbers.forEach(element => {
    element.addEventListener('click', function(e){
        if(displayValue === "0"){
            displayValue = `${element.textContent}`;
            currentNumber = Number(displayValue);
            updateScreen()
        } else {
            displayValue += element.textContent;
            currentNumber = Number(displayValue)
            updateScreen()
        }
    })
});

//listener for decimal & percentage button
decimal.addEventListener('click', function(e){
    if(!displayValue.includes(".")){
        displayValue += ".";
    }
    updateScreen();
});

makePercentage .addEventListener('click', function(e){
    displayValue = `${percentage(displayValue)}`; 
    updateScreen();
});

//listeners for operator buttons
operators.forEach(element => {
    element.addEventListener('click', function(e){
        if(operator === ""){
            operator = `${element.textContent}`;
            prevNumber = currentNumber;
            displayValue = "0";
            currentNumber = Number(displayValue);
            updateScreen();
        } else {
            operator = "";
            displayValue = "0";
            currentNumber = Number(displayValue);
            prevNumber = undefined;
            updateScreen();
        }
    })
});

//listener for reset and hard reset
reset.addEventListener('click', function(e){
    displayValue = "0";
    currentNumber = Number(displayValue);
    updateScreen()
});

hardReset.addEventListener('click', function(e){
    operator = "";
    displayValue = "0";
    currentNumber = Number(displayValue);
    updateScreen()
});

//listener for equal
equal.addEventListener('click', function(){
    if(currentNumber, prevNumber, operator){
        displayValue = `${resolveOperation(currentNumber, prevNumber, operator)}`;
        operator = "";
        currentNumber = Number(displayValue);
    }
    updateScreen();
});


//Mathematical operators
function sum (current, prev){
    return prev + current;
}

function subtraction (current, prev){
    return prev - current;
}

function mul (current, prev){
    return prev * current;
}

function division (current, prev){
    return prev / current;
}

function percentage (current){
    return Number((current / 100).toFixed(5));
}

//Resolve the operation 
function resolveOperation(currentValue, previousValue, operatorSign){
    switch (operatorSign){
        case "+":
            return sum(currentValue, previousValue);
        break;
        case "-":
            return subtraction(currentValue, previousValue);
        break; 
        case "*":
             return mul(currentValue, previousValue);
        break; 
        case "÷":
             return division (currentValue, previousValue);
        break; 
    }
}

//Update Screen
function updateScreen() {
    displayValue = displayValue.substring(0,10);
    screen.textContent = displayValue;
}