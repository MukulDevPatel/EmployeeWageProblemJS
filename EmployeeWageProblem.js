//UC1
const IS_Absent =1;
let empCheck = Math.floor(Math.random() * 10) %2;
if (empCheck == IS_Absent)
{
    console.log("Employee is absent"); return;
}
else 
{
    console.log("Employee is present");
}