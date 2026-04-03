class Employee {
    constructor(firstName, lastName, email, designation, basicSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.designation = designation;
        this.basicSalary = basicSalary;
    }

    // Getter Methods
    getFirstName() { return this.firstName; }
    getLastName() { return this.lastName; }
    getEmail() { return this.email; }
    getDesignation() { return this.designation; }
    getSalary() { return this.basicSalary; }

    // Setter Methods
    setFirstName(fname) { this.firstName = fname; }
    setLastName(lname) { this.lastName = lname; }
    setEmail(email) { this.email = email; }
    setDesignation(des) { this.designation = des; }
    setSalary(sal) { this.basicSalary = sal; }

    display() {
        console.log("Employee Details:");
        console.log(this.firstName, this.lastName);
        console.log(this.email);
        console.log(this.designation);
        console.log("Salary:", this.basicSalary);
    }
}

module.exports = Employee;