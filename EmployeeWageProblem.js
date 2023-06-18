//UC9
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
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyHrsMap = new Map();
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
    empDailyHrsMap.set(totalWorkingDays,empHrs);
    empDailyWageMap.set(totalWorkingDays,calDailyWage(empHrs));
}

const findTotal = (TotalVal, DailyVal)=>TotalVal + DailyVal;

let count = 0;
let TotalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let TotalSalary = empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
console.log("UC9A-Emp Wage with Arrow: " + " Total Hours: "+ TotalHours+ " Total Wages: "+ TotalSalary);

let NonWorkingDays = new Array();
let PartWorkingDays = new Array();
let FullWorkingDays = new Array();

empDailyHrsMap.forEach( (value,key)=> {
    if (value == 8) FullWorkingDays.push(key);
    else if (value == 4) PartWorkingDays.push(key);
    else NonWorkingDays.push(key);
});

console.log("=====Full Working Days=====");
console.log(FullWorkingDays);
console.log("=====Part Working Days=====");
console.log( PartWorkingDays);
console.log("=====Non Working Days=====");
console.log(NonWorkingDays);