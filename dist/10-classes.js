"use strict";
class Person {
    // Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // Methods
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    // Getter
    getName() {
        return this.name;
    }
    // Setter
    setName(name) {
        this.name = name;
    }
}
// Shorter syntax with parameter properties
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}
let nirjal123 = new Employee(101, "Nirjal", "Engineering");
console.log(nirjal123.getDetails()); // Piyush works in Engineering
// Inheritance
class Manager extends Employee {
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `${this.name} manages ${this.teamSize} people`;
    }
}
// Abstract classes
class Shape {
    constructor(color) {
        this.color = color;
    }
    displayColor() {
        console.log(`This shape is ${this.color}`);
    }
}
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
