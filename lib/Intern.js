// Intern.js
// test run
// let test = "testName";
// console.log(test);

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
const Employee = require("./Employee");

// * `school`
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // * `getSchool()`
  getSchool() {
    return this.school;
  }
  // * `getRole()`&mdash;overridden to return `'Intern'`
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;