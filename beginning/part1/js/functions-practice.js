/* eslint-env browser*/

//STEP 1
function halfNumber(number) {
    "use strict";
    var result = number/2;
    window.console.log("Step1: Half of "+ number +" is " + result + ".");
}
//STEP 2
function squareNumber(number) {
    "use strict";
    var result = number * number;
    window.console.log("Step 2: The result of squaring the number " + number + " is " + result + ".");
}
//STEP 3
function percentOf(number1, number2) {
    "use strict";
    var result = number1/number2 * 100;
    window.console.log("Step 3: " + number1 + " is " + result + "% of " + number2 + ".");
}

//STEP 4
function findModulus(number1, number2) {
    "use strict";
    var result = number2 % number1;
    window.console.log("Step 4: " + result + " is the modulus of " + number1 + " and " + number2 + ".");
}

function sum(numbers) {
    "use strict";
    var sum =0;
    for (i = 0; i < numbers.length; i += 1) {
        sum += parseInt(numbers[i]);
    }
    window.console.log("Step 5: Sum of all the numbers: " + numbers + "  are : " + sum);
}
function addNumber() {
    "use strict";
    var number = window.prompt("The numbers to be added should be delimited by commas. Please enter numbers to be added").split(",");
    sum(number);
}


halfNumber(100);
squareNumber(3);
percentOf(10,20);
findModulus(4,10);
addNumber();
