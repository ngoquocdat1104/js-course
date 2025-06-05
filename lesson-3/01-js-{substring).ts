//1
let fullName = "Nguyen Van A"
let lastSpaceIndex = fullName.lastIndexOf(" ");
let firstName = fullName.substring(lastSpaceIndex + 1);
console.log(firstName);

//2
let date = "2024-05-19";
let firstDashIndex = date.indexOf("-");
console.log(date.substring(0, firstDashIndex));

//3
let email = "123@gmail.com";
let atIndex = email.indexOf("@");
console.log(email.substring(atIndex+1));