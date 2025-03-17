//IMPORTANT NOTE: I utilized ChatGPT to build the calculator functions for this app (as requested by the instructor)
/*ChatGPT Approximate Prompt (My computer crashed and I don't remember the exact prompt from ChatGPT).
Prompt: "calculator functions with html buttons and javascript without using eval and two numbers at a time"
*/

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;

//numberCheck is used to make sure firstNum is defined.
let numberCheck = false;

//Function is used to "update" the text area, used at the end of other functions.
function updateDisplay()
{
    let displayValue = firstNumber;
    if(currentOperator !== null)
    {
        displayValue += ` ${currentOperator} ${secondNumber}`;
    }

    //Display the single/combined value in the text area.
    document.getElementById('display-area').value = displayValue;
}

//Clears all number variables, operator variable, and sets the check to false.
function clearFunction()
{
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
    numberCheck = false;
    updateDisplay();
}

//Stores the button input for both number variables.
function numberInput(number)
{
    if(numberCheck == true)
    {
        secondNumber = number;

        //numberCheck is set to false since the secondNumber was recorded.
        numberCheck = false;
    }
    else
    {
        //Keep adding digits to the first number if there isn't an operator
        if(currentOperator === null)
        {
            firstNumber += number;
        }
        else
        {
            secondNumber += number;
        }
    }
    updateDisplay();
}

//Function is used when an operator button is clicked, setting the operator.
function setOperator(operator)
{
    //Function calls calculateResult() if there's an operator and two numbers.
    if(currentOperator !== null && secondNumber !== '')
    {
        calculateResult();
    }

    currentOperator = operator;
    numberCheck = true;
}

//Function calculates two given numbers with a chosen operator.
function calculateResult()
{
    let numOne = parseFloat(firstNumber);
    let numTwo = parseFloat(secondNumber);
    let result;

    //Returns an error is either number is "Not a Number".
    if(isNaN(numOne) || isNaN(numTwo))
    {
        result = 'ERR';
    }
    else
    {
        switch(currentOperator)
        {
            //Addition Case
            case '+':
                result = numOne + numTwo;
                break;
            //Subtraction Case 
            case '-':
                result = numOne - numTwo;
                break;
            //Multiplication Case
            case '*':
                result = numOne * numTwo;
                break;
            //Division Case
            case '/':
                //Returns an error if dividing by zero.
                result = numTwo === 0 ? 'ERR' : numOne / numTwo;
                break;
        }
    }
    firstNumber = result.toString();
    secondNumber = '';
    currentOperator = null;
    numberCheck = false;
    updateDisplay();
}