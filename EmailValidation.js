//Email address UC1
const emailPattern = /^abc(\.[a-zA-Z]+)?@bridgelabz\.co\.in$/;
const email = "abc.xyz@bridgelabz.co.in";
const isValid = emailPattern.test(email);
console.log("Is Valid:", isValid);

//UC2
const emailPattern1 = /^abc\.[a-zA-Z]+@bridgelabz(\.[a-zA-Z]+)?\.co\.in$/;
const email1 = "abc.xyz@bridgelabz.co.in";
const isValid1 = emailPattern1.test(email1);
console.log("Is Valid:", isValid1);

//UC3
const emailPattern2 = /^abc\.[a-zA-Z]+@bridgelabz\.[a-zA-Z]+\.[a-zA-Z]+$/;
const email2 = "abc.xyz@bridgelabz.co.in";
const isValid2 = emailPattern2.test(email2);
console.log("Is Valid:", isValid2);

//UC4
const emailPattern3 = /^abc(\.[a-zA-Z0-9_\+-.]+)?@bridgelabz\.co\.in$/;
// Output: Email 1 is Valid: true
const email3 = "abc.xyz@bridgelabz.co.in";
const isValid3 = emailPattern3.test(email3);
console.log("Email 1 is Valid:", isValid3);

// Output: Email 2 is Valid: true
const email4 = "abc.xyz+info@bridgelabz.co.in";
const isValid4 = emailPattern3.test(email4);
console.log("Email 2 is Valid:", isValid4); 

// Invalid TLD Output: Email 3 is Valid: false
const email5 = "abc.xyz@bridgelabz.com"; 
const isValid5 = emailPattern3.test(email5);
console.log("Email 3 is Valid:", isValid5); 

// Invalid special character Output: Email 4 is Valid: false
const email6 = "abc.xyz$test@bridgelabz.co.in"; 
const isValid6 = emailPattern3.test(email6);
console.log("Email 4 is Valid:", isValid6); 


//UC5
const emailPattern4 = /^abc(\.[a-zA-Z0-9_\+-.]+)?@bridgelabz\.co\.in$/;
// Output: Email 1 is Valid: true
const finalEmail1 = "abc.xyz@bridgelabz.co.in";
const isValid7 = emailPattern4.test(finalEmail1);
console.log("Final Email 1 is Valid:", isValid7);

// Output: Email 2 is Valid: true
const finalEmail2 = "abc.xyz+info@bridgelabz.co.in";
const isValid8 = emailPattern4.test(finalEmail2);
console.log("Final Email 2 is Valid:", isValid8); 

// Invalid TLD Output: Email 3 is Valid: false
const finalEmail3 = "abc.xyz@bridgelabz.com"; 
const isValid9 = emailPattern4.test(finalEmail3);
console.log("Final Email 3 is Valid:", isValid9); 

// Invalid special character Output: Email 4 is Valid: false
const finalEmail4 = "abc.xyz$test@bridgelabz.co.in"; 
const isValid10 = emailPattern4.test(finalEmail4);
console.log("Final Email 4 is Valid:", isValid10);