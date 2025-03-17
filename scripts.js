let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let numberCheck = false;

function updateDisplay()
{
    let displayValue = firstNumber;
    if(currentOperator !== null)
    {
        displayValue += ` ${currentOperator} ${secondNumber}`;
    }

    document.getElementById('display-area').value = displayValue;
}

function clearFunction()
{
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
    numberCheck = false;
    updateDisplay();
}

function numberInput(number)
{
    if(numberCheck == true)
    {
        secondNumber = number;
        numberCheck = false;
    }
    else
    {
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

function setOperator(operator)
{
    if(currentOperator !== null && secondNumber !== '')
    {
        calculateResult();
    }

    currentOperator = operator;
    numberCheck = true;
}

function calculateResult()
{
    let numOne = parseFloat(firstNumber);
    let numTwo = parseFloat(secondNumber);
    let result;

    if(isNaN(numOne) || isNaN(numTwo))
    {
        result = 'ERR';
    }
    else
    {
        switch(currentOperator)
        {
            case '+':
                result = numOne + numTwo;
                break;
            case '-':
                result = numOne - numTwo;
                break;
            case '*':
                result = numOne * numTwo;
                break;
            case '/':
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