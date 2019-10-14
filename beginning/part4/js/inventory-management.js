/*eslint-env browser*/

var inventory = [[4824, "Shirt", 10, 15.99], [6343, "Jeans", 22, 39.99], [3223, "Socks", 36, 9.99], [2233, "Hat", 12, 14.99], [9382, "Jacket", 5, 49.99]];


var inventory;

function display_Menu() {
    "use strict";
    window.console.log("Welcome to the Inventory Managemet Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Updates the existing product's inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function sortFunction(element1, element2) {
    "use strict";
    if (element1[0] === element2[0]) {
        return 0;
    }
    else {
        return (element1[0] < element2[0]) ? -1 : 1;
    }
}

function displayProduct(inventory) {
    "use strict";
    inventory.sort(sortFunction);
    var index;
    for (index = 0; index < inventory.length; index++) {
        window.console.log(inventory[index][0] + " " + inventory[index][1] + " (" + inventory[index][2] + ") $" + inventory[index][3]);
    }
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var number = window.prompt("Enter a sku number!");
    var stock = window.prompt("Enter a stock quantity!");
    var index1;
    for (var index1 = 0; index1 <= inventory.length; index1++) {
        if (inventory[index1][0] == number) {
            inventory[index1][2] = stock;
            break;
        }
    }
}

function main() {
    "use strict";
    display_Menu();

    var yes = true;
    while (yes === true) {
        var command = window.prompt("Enter Command! View, Update or Exit");
        command = command.toLowerCase();
        if (command == "view") {
            displayProduct(inventory);
        } else if (command == "update") {
            update(inventory);
            displayProduct(inventory);
        } else if (command == "exit") {
            yes = false;
        } else {
            window.alert("Invalid command entered! Enter a valid input!");
        }
    }
}

main();