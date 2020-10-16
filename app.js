const allInputValues = [];
let number1, operators = [], number2;

const calculator = {
    display : document.querySelector(".display"),
    domInputValues : document.querySelectorAll(".input-value"),
    inputValues : ["*", "/", "-", "+", ".", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    result : document.querySelector(".result"),
    deleteValues : document.querySelector(".delete-values"),
    calculatorFillingUp : function() {
        this.domInputValues.forEach((box, index) => {
            box.innerHTML = this.inputValues[index];
        });
    },
    domInputEvent : document.querySelectorAll(".input-value").forEach((inputVal) => inputVal.addEventListener("click", writeNum)),
    
}

function writeNum(event) {
    // push all user input in an array (numbers and strings)
    const inputValue = event.target.textContent;
    if (isNaN(Number(inputValue))) {
        allInputValues.push(inputValue);
    } else {
        allInputValues.push(Number(inputValue));
    }
    console.log(allInputValues);

    // filter numbers until it reaches the first string and join the numbers in number 1, first to operate on
    // store it in let number1
    const reducer = function(accumulator, currentValue, currentIndex, arr) {
        if(typeof currentValue === "number") {
            accumulator = Number("" + accumulator + currentValue);
            //allInputValues.shift(currentValue);
        };
        if(typeof currentValue === "string") {
            accumulator = Number("" + accumulator + "");
            console.log(arr);
        }
        return accumulator;
    };
    number1 = allInputValues.reduce(reducer);
    console.log(typeof number1, number1);
    console.log(allInputValues);
    // remove the first number(s) in the array

    // filter all string(op) and sort them by operation order precendance or importance (*, /, +, -)
    // store it in a new array let operators = []

    // take what is left from the original (it should be numbers), join in number 2, second to operate with
    // store it in let number2 

    // do operation(s)

    // return result!

    calculator.display.innerHTML = number1;
    
}

/* Take Away 1: NaN data type is still a numeric type!!! so, you can't filter number type from NaN type :))))
You should use the function isNaN(NaN) to filter numbers from NaN. Maybe you want to use Number() function
to turn strings to numbers in an array and you want to filter normal strings (converted to NaN by Number("+")) 
of numbers strings (converted to 8, a numbers by Number("8"))*/





calculator.calculatorFillingUp();