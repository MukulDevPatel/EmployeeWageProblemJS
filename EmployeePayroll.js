//UC13
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
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) {
            console.log("Setting: " + name);
            this._name = name;
        }
        else throw "Name is Incorrect"; 
    }

    //method
    toString() {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "undefined" : 
        this.startDate.toLocaleDateString("en-US", options);
        return "Id = " + this.id + ", Name = "+ this.name + ", Salary = "+ this.salary + ", Gender: " + 
        this.gender + ", Start date: " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, 'M', new Date());
console.log(employeePayrollData.toString());

try{
    employeePayrollData.name = "John";
    console.log(employeePayrollData.toString());
    employeePayrollData.name = "edward";
    console.log(employeePayrollData.toString());
    employeePayrollData.name = "Jo";
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 20000, 'F', new Date());
console.log(newEmployeePayrollData.toString());