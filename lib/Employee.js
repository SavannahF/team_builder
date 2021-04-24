// Employee.js
// test run
// let test = "testName";
// console.log(test);

// The first class is an `Employee` parent class with the following properties and methods:
// * `name`

// * `id`

// * `email`
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // * `getName()`
  getName() {
    // console.log(`Employee Name: ${this.name} `);
    return this.name;
  }

  // * `getId()`
  getId() {
    // console.log(`Employee ID: ${this.id}`);
    return this.id;
  }

  // * `getEmail()`
  getEmail() {
    // console.log(`Employee Email: ${this.email}`);
    return this.email;
  }

  // * `getRole()`&mdash;returns `'Employee'`
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
