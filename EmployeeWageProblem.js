//UC6
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

function calDailyWage(totalEmpHrs){
    return totalEmpHrs * Wage_Per_Hrs;
}


while (totalEmpHrs<=Max_Hrs_In_Month && totalWorkingDays<Num_Of_Working_Days){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
    empDailyWageArr.push(calDailyWage(totalEmpHrs));
}
let empWage = calDailyWage(totalEmpHrs);
console.log("UC6-Total Days: " + totalWorkingDays + ",\nTotal Hours: " + totalEmpHrs + "\nEmployee wage is: " + empWage);
console.log(empDailyWageArr);

//Array helper functions
//UC7A-Total wage using array foreach or reduce method
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A-Total Days: " + totalWorkingDays + ", Total Hours: " + totalEmpHrs + " Employee wage is: " + totalEmpWage);

function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A-Emp Wage with reduce: "+ empDailyWageArr.reduce(totalWages,0));

//UC7B-show the day along with daily wage using array map helper function
let dailyCntr = 0;
function MapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let MapDayWithWageArr = empDailyWageArr.map(MapDayWithWage);
console.log("UC7B-Daily Wage map ");
console.log(MapDayWithWageArr);

//UC7C-Show when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullTimeWageArr = MapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C- Daily wage filter when Full Time wage earned");
console.log(fullTimeWageArr);

//UC7D-Find first occurrance when full time wage was earned using find function
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D- full time wage was earned on Day " + MapDayWithWageArr.find(findFullTimeWage));

//UC7E-Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E-Check all element have full time wage: " + fullTimeWageArr.every(isAllFullTimeWage));

//UC7F-Check if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F- Check if any part time wage: " + MapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G- Find the number of days the employee worked
function totalDaysWorked(numOfDays,dailyWage){
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G-Number of days emp Worked: "+empDailyWageArr.reduce(totalDaysWorked,0));