// Test the PIN code
const pinCodePattern = /^[1-9][0-9]{5}$/;
const pinCode = "400088";
if (pinCodePattern.test(pinCode)){
    console.log("Valid Email: ",pinCode)
}else{
    console.log("Invalid Email");
}
