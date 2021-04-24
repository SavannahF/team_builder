// Engineer.js
// test run
// let test = "testName";
// console.log(test);

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
const Employee = require("./Employee");

// * `github`&mdash;GitHub username
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    // * `getGithub()`
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  // * `getRole()`&mdash;overridden to return `'Engineer'`
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;