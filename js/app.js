let name = prompt("Please enter your name");
let gender = prompt("please enter your gender (male/female)");
let age = prompt("how old are you?");

let result = confirm("do you want to skip the welcoming message?")
if (result==true){
    alert("skipped welcoming message");
}
else {
let userGender;

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

let answers = [];
let q1,q2,q3;

function question1(){
q1 = prompt("do u work?");
  isValid(q1);

  function isValid(answer){
    while(answer != "yes" && answer != "no"){
        answer = alert("invalid input");
        question1();
        break;
    }}

  }

  function question2(){
    q2 = prompt("do u live in jordan?");
    isValid(q2);
  
    function isValid(answer){
      while(answer != "yes" && answer != "no"){
          answer = alert("invalid input");
          question2();
          break;
      }}
      
    }

    function question3(){
    q3 = prompt("are u a human?");
      isValid(q3);
    
      function isValid(answer){
        while(answer != "yes" && answer != "no"){
            answer = alert("invalid input");
            question3();
            break;
        }}
        
      }
  
  question1();
  question2();
  question3();

  answers.push(q3,q2,q1);
  console.log(answers);