//UC2
const Part_Time = 1;
const Full_Time = 2;
const Part_Time_Hrs = 4;
const Full_Time_Hrs = 8;
const Wage_Per_Hrs = 20;
let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
 switch (empCheck)
 {
    case Part_Time:
        empHrs = Part_Time_Hrs;
        break;
    case Full_Time:
        empHrs = Full_Time_Hrs;
        break;
    default:
        empHrs = 0;
        break;
  }
let Daily_Wage = empHrs * Wage_Per_Hrs;
console.log("Employee wage is: " + Daily_Wage);