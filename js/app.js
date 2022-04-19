var name = prompt("Please enter your name");
var gender = prompt("please enter your gender (male/female)");
var age = prompt("how old are you?");

var result = confirm("do you want to skip the welcoming message?")
if (result==true){
    alert("skipped welcoming message");
}
else {
var userGender;

if (age <= 0) {
    alert("The age is less than or equal to zero!");
  }

if (gender == "male") {
    userGender = "Mr. ";
  } 
  else if (gender == "female") {
    userGender = "Ms. ";
  } 
  else {
    userGender = " ";
  }
alert("Welcome "+userGender+name);}