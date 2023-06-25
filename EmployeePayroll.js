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

//UC14-ValidateIdSalaryGenderDate
function ValidateIdSalaryGenderDate(id,salary,gender,date){
    const idPattern = /^[1-9]d*$/;
    const salaryPattern = /^[1-9]\d*(\.\d+)?$/;
    const genderPattern = /^[MF]$/;
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    try{
        if(!idPattern.test(id) || !salaryPattern.test(salary) || !genderPattern.test(gender) || !datePattern.test(date)){
            throw new Error("Invalid data format");
        }

        const currentDate = new Date();
        const inputDate = new Date(date);
        
        if(inputDate>currentDate){
            throw new Error("Date can't be in the future");
        }
        return true;
    }catch(error){
        console.error(error.message);
        return false;
    }
}

const id = "1";
const salary = "20000";
const gender = "F";
const date = "2023-06-25";

const isValid = ValidateIdSalaryGenderDate(id,salary,gender,date);
console.log("ID: "+id+" Salary: "+salary+" Gender: "+gender+" Date: "+date);
console.log("/nData is valid: "+isValid);