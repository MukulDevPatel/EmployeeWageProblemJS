//UC8
const Part_Time = 1;
const Full_Time = 2;
const Part_Time_Hrs = 4;
const Full_Time_Hrs = 8;
const Wage_Per_Hrs = 20;

const Num_Of_Working_Days = 20;
const Max_Hrs_In_Month = 160;


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

let totalEmpHrs = 0;
let totalWorkingDays = 0;;

let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calDailyWage(totalEmpHrs){
    return totalEmpHrs * Wage_Per_Hrs;
}


while (totalEmpHrs<=Max_Hrs_In_Month && totalWorkingDays<Num_Of_Working_Days){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calDailyWage(totalEmpHrs));
    empDailyWageMap.set(totalWorkingDays,calDailyWage(empHrs));
}

console.log(empDailyWageMap);

function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}

console.log("UC8- Emp wage map Total hours: " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));