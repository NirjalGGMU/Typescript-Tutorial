"use strict";
// Object type annotation
let user = {
    name: "Nirjal",
    age: 23,
};
let newUser = {
    id: 1,
    name: "Nirjal",
    age: 22,
};
let laptop = {
    name: "MacBook Pro",
    price: 2000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
};
