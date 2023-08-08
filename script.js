let numberOne = Number(prompt('Enter the first number..:'))
let numberTwo = Number(prompt('Enter the second number'))

function mathOperations(numberOne, numberTwo){
    checkSumEvenOrOdd(numberOne, numberTwo)
    alert(`The subtraction of the two numbers: ${(numberOne - numberTwo).toFixed(2)}`)
    alert(`The multiplication of two numbers: ${(numberOne * numberTwo).toFixed(2)}`)
    alert(`The division of the two numbers: ${(numberOne / numberTwo).toFixed(2)}`)
    alert(`The remainder of the division of the two numbers: ${(numberOne % numberOne).toFixed(2)}`)
}

function checkSumEvenOrOdd (numberOne, numberTwo){
    if ((numberOne % numberTwo) === 0){
        alert(`The sum of the two numbers is even: ${(numberOne + numberTwo).toFixed(2)}`)
    } else {
        alert(`The sum of the two numbers is odd: ${(numberOne + numberTwo).toFixed(2)}`)
    }
}

function checkNumbersSame (numberOne, numberTwo){
    if (numberOne === numberTwo){
        alert(`The entered numbers are the same 
                Number One..: ${numberOne}
                Number Two..: ${numberTwo}`)
    } else {
        alert(`The numbers entered are different
                Number One..: ${numberOne}
                Number Two..: ${numberTwo}`)
    }
}

while ((isNaN(numberOne) || isNaN(numberTwo)) || (numberOne == '' || numberTwo == '')) {
    if (isNaN(numberOne) || numberOne == ''){
        numberOne = Number(prompt('first number is invalid, please enter a number..:'))
    } else {
        numberTwo = Number(prompt('second number is invalid, please enter a number..:'))
    } 
} 
checkNumbersSame(numberOne, numberTwo)
mathOperations(numberOne, numberTwo)

 