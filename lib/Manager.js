// Manager.js
// test run
// let test = "testName";
// console.log(test);

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
const Employee = require("./Employee");

// * `officeNumber`
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  // * `getRole()`&mdash;overridden to return `'Manager'`
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
