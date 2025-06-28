class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`; // Default description
  }
}


class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // Call the parent class constructor
    this.teamSize = teamSize; 
  }

  describe() {
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize} people.`; // Override the describe method
  }
}



const emp1 = new Employee("Alice Johnson", "Marketing"); 
const emp2 = new Employee("David Tran", "Finance");
const mgr1 = new Manager("Sophia Lee", "Engineering", 10);
const mgr2 = new Manager("James Miller", "Sales", 5);// Create instances of Employee and Manager


class Company {
  constructor() {
    this.employees = [];// Initialize an empty array to hold employees
  }

  addEmployee(employee) {
    this.employees.push(employee);// Method to add an employee to the company
  }

  listEmployees() {
    console.log("Company Employees:");// Method to list all employees
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });// Call the describe method for each employee
  }
}



const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);// Add employees to the company


myCompany.listEmployees();// List all employees in the company