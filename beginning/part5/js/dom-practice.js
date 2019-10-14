/*eslint-env browser*/

//STEP 1
function displayMessage() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 2
var myButton1 = window.document.getElementById("myButton1");
myButton1.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};

//STEP 3
var myButton2 = window.document.getElementById("myButton2");
myButton2.addEventListener("click", display, false);
function display() {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 4
var myButton3 = window.document.getElementById("myButton3");
myButton3.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
}, false);

//STEP 5
function init() {
    "use strict";
    var myButton4 = window.document.getElementById("myButton4");
    myButton4.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}

window.addEventListener("load", init);

