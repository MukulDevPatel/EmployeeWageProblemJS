// Helper function to get work hours based on employee type
const Part_Time = 1;
const Full_Time = 2;
const Part_Time_Hrs = 4;
const Full_Time_Hrs = 8;
const Wage_Per_Hrs = 20;

const Num_Of_Working_Days = 20;
const Max_Hrs_In_Month = 160;

const employee = {
  empWages: [],
  empWorkingDays: 0,

  getWorkingHours: (empCheck) => {
    switch (empCheck) {
      case Part_Time:
        return Part_Time_Hrs;
      case Full_Time:
        return Full_Time_Hrs;
      default:
        return 0;
    }
  },

  calDailyWage: (workHours) => {
    return workHours * Wage_Per_Hrs;
  },

  calculateMonthlyWages: () => {
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = [];

    while (
      totalEmpHrs <= Max_Hrs_In_Month &&
      totalWorkingDays < Num_Of_Working_Days
    ) {
      totalWorkingDays++;
      let empCheck = Math.floor(Math.random() * 10) % 3;
      let workHours = employee.getWorkingHours(empCheck);
      totalEmpHrs += workHours;
      let dailyWage = employee.calDailyWage(workHours);
      empDailyWageArr.push(dailyWage);
    }

    employee.empWages = empDailyWageArr;
    employee.empWorkingDays = totalWorkingDays;
  },

  calcTotalWage: () => {
    return employee.empWages.reduce((totalWage, dailyWage) => totalWage + dailyWage, 0);
  },

  showDayWithDailyWage: () => {
    return employee.empWages.map((dailyWage, index) => `Day ${index + 1}: ${dailyWage}`);
  },

  showFullTimeWageDays: () => {
    return employee.empWages
      .map((dailyWage, index) => (dailyWage === 160 ? index + 1 : null))
      .filter((day) => day !== null);
  },

  findFirstFullTimeWageDay: () => {
    return employee.empWages.findIndex((dailyWage) => dailyWage === 160) + 1;
  },

  checkFullTimeWage: () => {
    return employee.empWages.every((dailyWage) => dailyWage === 160);
  },

  checkPartTimeWage: () => {
    return employee.empWages.some((dailyWage) => dailyWage !== 160);
  },

  findNumWorkingDays: () => {
    return employee.empWorkingDays;
  },
};

employee.calculateMonthlyWages();
//Object helper functions
//UC7A-Total wage using array foreach or reduce method
const totalWage = employee.calcTotalWage();
console.log("UC7A-Total Wage:", totalWage);

//UC7B-show the day along with daily wage using array map helper function
const dayWithDailyWage = employee.showDayWithDailyWage();
console.log("UC7B-Day with Daily Wage:", dayWithDailyWage);

//UC7C-Show when full time wage of 160 were earned
const fullTimeWageDays = employee.showFullTimeWageDays();
console.log("UC7C-Full Time Wage Days:", fullTimeWageDays);

//UC7D-Find first occurrance when full time wage was earned using find function
const firstFullTimeWageDay = employee.findFirstFullTimeWageDay();
console.log("UC7D-First Full Time Wage Day:", firstFullTimeWageDay);

//UC7E-Check if every element of full time wage is truely holding full time wage
const isFullTimeWage = employee.checkFullTimeWage();
console.log("UC7E-Is Full Time Wage:", isFullTimeWage);

//UC7F-Check if there is any part time wage
const hasPartTimeWage = employee.checkPartTimeWage();
console.log("UC7F-Has Part Time Wage:", hasPartTimeWage);

//UC7G- Find the number of days the employee worked
const numWorkingDays = employee.findNumWorkingDays();
console.log("UC7G-Number of Working Days:", numWorkingDays);

console.log("Daily Wages:", employee.empWages);