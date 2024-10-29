// ---- Chapter - 12 - 13 : IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS ----- 


//  solution-1

// var userinput = prompt("Enter random number or characters");

// if (userinput >= String.fromCharCode(65) && userinput <= String.fromCharCode(90)) {
//     alert("Uppercase");
// }

// else if (userinput >= String.fromCharCode(97) && userinput <= String.fromCharCode(122)) {
//     alert("Lowercase");
// }

// else if (userinput >= String.fromCharCode(48) && userinput <= String.fromCharCode(57)) {
//     alert("Number");
// }
// else {
//     alert("Invalid condition...");
// }

//  solution-2

// var input1 = +prompt("Enter number one")
// var input2 = +prompt("Enter number two")

// if(input1 > input2){
//    alert(input1 + "  >  " + input2)
// }
// else if(input1 < input2){
//    alert(input1 + "  <  " + input2)
// }
// else if(input1 = input2){
//    alert(input1 + "  =  " + input2)
// }

//  solution-3

// var input = +prompt("Enter")

// if(input > 0){
//    alert(input + " is a positive number ")
// }
// else if(input < 0){
//    alert(input + " is a negative number ")
// }
// else if(input === 0){
//    alert(" the entered number is 0 ")
// }


//  solution-4

// var string = prompt("enter any vowel")

// if (string === "A" || string === "a" || string === "E" || string === "e"
//     || string === "I" || string === "i" || string === "O" || string === "o" || string === "U" || string === "u") {

//         alert("The entered alphabet is vowel")

// }
// else{
//     alert("please enter a vowel alphabet")
// }


// solution - 5

// var pswd = "11223344";
// var user = prompt("Enter your password");

// if(user === pswd){
//     alert("Correct! The password you entered matches the original password")
// }
// else if(user === null || user === undefined || user === ""){
//     alert("Please enter your password")
// }
// else{
//     alert("Incorrect password")
// }

// solution - 6

// var greeting;
// var hour = +prompt("enter a value");
// if (hour <= 18) {
//     greeting = "Good day"
//     alert(greeting)
// }
// else {
//     greeting = "Good evening"
//     alert(greeting)
// }

// solution - 7

// var userinput = +prompt("What userinput is it ?");

// if (userinput >= 0 && userinput < 1200) {
//     alert("Good Morning")
// }

// else if (userinput >= 1200 && userinput < 1700) {
//     alert("Good Afternoon")
// }

// else if (userinput >= 1700 && userinput < 2100) {
//     alert("Good Evening")
// }

// else if (userinput >= 2100 && userinput < 2359) {
//     alert("Good Night")
// }

// else {
//     alert("invalid input")
// }


