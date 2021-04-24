// index.js
// test run
// let test = "testName";
// console.log(test);

const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Choice between this or fs route??
const generatePage = require("./src/template-page");
const writeFile = require("./src/generate-site");

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = { manager, engineer, intern };

// let team = [];
