//UC10
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
let empDailyHrsAndWageArr = new Array();

function calDailyWage(totalEmpHrs){
    return totalEmpHrs * Wage_Per_Hrs;
}

while (totalEmpHrs<=Max_Hrs_In_Month && totalWorkingDays<Num_Of_Working_Days){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push( {
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage: calDailyWage(empHrs),
        toString() {
            return "\nDay "+this.dayNum + " => Working Hours is " + this.dailyHours + " And wage earned = " + this.dailyWage
        },
    });
}

console.log("UC10-Showing daily worked hours and wage: " + empDailyHrsAndWageArr);


//UC11A-UC11D Using object function along with arrow function

let totalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).reduce((totalWage,dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage,0);
let totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).reduce((totalHours,dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC11A Total hours: "+totalHours+ " Total Wages: " + totalWages);

//UC11B
process.stdout.write("UC11B Logging full work days ");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
let partWorkingdaysStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours == 4).map(dailyHrsAndWage=>dailyHrsAndWage.toString());

//UC11C
console.log("\nUC11C Part Working Days Strings: "+ partWorkingdaysStrArr);
let nonWorkingDayNums = empDailyHrsAndWageArr.filter(dailyHrsAndWage=> dailyHrsAndWage.dailyHours==0).map(dailyHrsAndWage=>dailyHrsAndWage.dayNum);
console.log("UC11D Non working day num: "+nonWorkingDayNums);