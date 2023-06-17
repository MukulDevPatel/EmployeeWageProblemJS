//UC4
const Part_Time = 1;
const Full_Time = 2;
const Part_Time_Hrs = 4;
const Full_Time_Hrs = 8;
const Wage_Per_Hrs = 20;
const Num_Of_Working_Days = 20;
let empHrs = 0;
let Daily_Wage;
var empCheck =  Math.floor(Math.random() * 10) % 3;
function getWorkingHours(empCheck) {
 switch (empCheck)
 {
    case Part_Time:
        return Part_Time_Hrs;
        break;
    case Full_Time:
        return Full_Time_Hrs;
        break;
    default:
        return 0;
        break;
  }
}
empHrs = getWorkingHours(empCheck);
let totalEmpHrs = 0;
for (let day = 0; day <= Num_Of_Working_Days; day++){
    let empCheck = Math.floor(Math.random() * 10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
}
Daily_Wage = totalEmpHrs * Wage_Per_Hrs;
console.log("Employee wage is: " + Daily_Wage + ",\nHours: " + totalEmpHrs);