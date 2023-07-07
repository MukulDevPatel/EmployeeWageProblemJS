//PIN code UC1
const pinCodePattern = /^[1-9][0-9]{5}$/;
const pinCode = "400088";
if (pinCodePattern.test(pinCode)){
    console.log("Valid Email: ",pinCode)
}else{
    console.log("Invalid Email");
}

// UC2
const pinCode2 = "A400088";
const isValid = pinCodePattern.test(pinCode2);
console.log("Is Valid: ",isValid);

// UC2
const pinCode3 = "400088B";
const isValidate = pinCodePattern.test(pinCode3);
console.log("Is Valid: ",isValidate);