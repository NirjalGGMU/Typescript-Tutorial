"use strict";
// Primitives
let userName = "Nirjal";
let age = 23;
let isActive = true;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Nirjal", "Coder", "Adhikari"];
// Tuples
let person = ["Nirjal", 23];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
// Any (avoid when possible)
let randomValue = 10;
randomValue = "string";
randomValue = true;
// Unknown (safer than any)
let userInput;
userInput = 5;
userInput = "text";
// Void (for functions that don't return)
function logMessage(message) {
    console.log(message);
}
// Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
