//Email address UC1
const emailPattern = /^abc(\.[a-zA-Z]+)?@bridgelabz\.co\.in$/;
const email = "abc.xyz@bridgelabz.co.in";
const isValid = emailPattern.test(email);
console.log("Is Valid:", isValid);