//UC11
class EmployeePayrollData{
    //property
    id;
    salary;
    gender;
    startDate;

    //Constructor

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name() {return this._name;}
    set name(name) {
        console.log("Setting: " + name);
        this._name = name;
    }

    //method
    toString() {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : 
        this.startDate.toLocaleDateString("en-US", options);
        return "Id = " + this.id + ", Name = "+ this.name + ", Salary = "+ this.salary + ", Gender: " + 
        this.gender + ", Start date: " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, 'M');
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 20000, 'F', new Date());
console.log(newEmployeePayrollData.toString());