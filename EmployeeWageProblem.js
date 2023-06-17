//UC5
const Part_Time = 1;
const Full_Time = 2;
const Part_Time_Hrs = 4;
const Full_Time_Hrs = 8;
const Wage_Per_Hrs = 20;

const Num_Of_Working_Days = 20;
const Max_Hrs_In_Month = 160;

let totalEmpHrs = 0;
let totalWorkingDays = 0;;

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


while (totalEmpHrs<=Max_Hrs_In_Month && totalWorkingDays<Num_Of_Working_Days){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * Wage_Per_Hrs;
console.log("UC-Total Days: " + totalWorkingDays + ",\nTotal Hours: " + totalEmpHrs + "\nEmployee wage is: " + empWage);