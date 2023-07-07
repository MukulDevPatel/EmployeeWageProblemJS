//Email address UC1
const emailPattern = /^abc(\.[a-zA-Z]+)?@bridgelabz\.co\.in$/;
const email = "abc.xyz@bridgelabz.co.in";
const isValid = emailPattern.test(email);
console.log("Is Valid:", isValid);

//UC2
const emailPattern1 = /^abc\.[a-zA-Z]+@bridgelabz(\.[a-zA-Z]+)?\.co\.in$/;
const email1 = "abc.xyz@bridgelabz.co.in";
const isValid1 = emailPattern.test(email1);
console.log("Is Valid:", isValid1);