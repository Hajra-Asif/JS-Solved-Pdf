// ---- Chapter - 09 - 11 --- USER INPUT & CONDITIONAL STATEMENT ----- 


//  solution-1

// var city = prompt("Enter your city name")

// if(city === "karachi"){
//   alert("Welcome to the city of light")
// }
// else{
//     alert("Welcome to " + city);
// }


//  solution-2

// var gender = prompt("Enter your gender")

// if(gender === "male" || gender === "man" ){
// alert("Good morning sir")
// }
// else if(gender === "female" || gender === "woman" ){
// alert("Good morning maam")
// }
// else{
//     alert("Good morning");
// }


//  solution-3

// var traffic = prompt("enter traffic light color")

// if(traffic === "red"){
// alert("you are supposed to stop immediately")
// }
// else if(traffic === "yellow"){
// alert("you are ready to move ")
// }
// else if(traffic === "green"){
// alert("you can move now")
// }


//  solution-4

// var fuel = +prompt("how many liter fuel is left in your car ")

// if(fuel >= 0.5 && fuel > 1){
// alert("you are good to go")
// }
// else if(fuel === 1){
// alert("Perfect! have  a safe journey")
// }
// else if(fuel <= 0.25){
//     alert("please refill the fuel in your car")
// }

// solution - 5

// var a = 4;
// if (++a === 5){ //true
// alert("given condition for variable a is true");
// }

// var b = 82; //false
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12; 
// if (c++ === 13){
// alert("condition 1 is true"); //false
// }
// if (c === 13){
//     alert("condition 2 is true"); //false
//     }
//     if (++c < 14){
//     alert("condition 3 is true");//false
//     }
//     if(c === 14){
//     alert("condition 4 is true"); //true
//     }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True"); //true
// }
// else{
// alert("not true")
// }


// if("car" < "cat"){ //true
//     alert("car is smaller than cat");
//     }

// solution - 6


// var totalmarks = 1400;
// var obtainedmarks = +prompt("Enter your obtained marks")
// var percentage = (obtainedmarks / totalmarks) * 100;

// if(obtainedmarks > 0 && obtainedmarks <= 1400){
//     if(percentage >= 80 ){
//         document.write("</br></br><h1>Mark Sheet </h1>")
//         document.write("</br>Total marks : " + totalmarks)
//         document.write("</br>Marks obtained : " + obtainedmarks)
//         document.write("</br>Percentage : " + percentage + "%")
//         document.write("</br>Grade : A-one")
//         document.write("</br>Remarks : Excellent")

//         }
//         else if(percentage >= 70 ){
//         document.write("</br>Total marks : " + totalmarks)
//         document.write("</br>Marks obtained : " + obtainedmarks)
//         document.write("</br>Percentage : " + percentage + "%")
//         document.write("</br>Grade : A")
//         document.write("</br>Remarks : Good")

//         }
//         else if(percentage >= 60 ){
//         document.write("</br>Total marks : " + totalmarks)
//         document.write("</br>Marks obtained : " + obtainedmarks)
//         document.write("</br>Percentage : " + percentage + "%")
//         document.write("</br>Grade : B")
//         document.write("</br>Remarks : You need to improve")

//         }
//         else if(percentage < 60 ){
//         document.write("</br>Total marks : " + totalmarks)
//         document.write("</br>Marks obtained : " + obtainedmarks)
//         document.write("</br>Percentage : " + percentage + "%")
//         document.write("</br>Grade : Fail")
//         document.write("</br>Remarks : Sorry")

//         }
// }
// else{
//     document.write("</br>Please enter valid input")
// }

// solution - 7

// var num = 5;
// var usernum = +prompt("Guess a secret number between 1 to 10");

// if(usernum === num){

//     alert("Congratulations! You guessed it right");

// }
// else if(usernum === num + 1 || usernum === num - 1){
// alert("Close enough to the correct answer")
// }
// else(
//     alert("Try again!")
// )

// solution - 8

// var usernum = +prompt("Enter a number to check if it is divisible by 3 or not");

// if(usernum % 3 === 0){
// alert(usernum + " is divisible by 3")
// }
// else{
//     alert(usernum + " is not divisible by 3")
// }

// solution - 9

// var usernum = +prompt("Enter a number to check if it is even or odd");


// if(usernum % 2 === 0){
// alert(usernum + " is even number")
// }
// else{
//     alert(usernum + " is odd number")
// }

// solution - 10


// var userinput = +prompt("Enter weather in your city")
// if ( userinput >= 30) {
//     alert("It is too hot outside.")

// }
// else if (userinput > 20 && userinput <= 30) {
//     alert("The Weather today is Normal.")

// }
// else if (userinput > 10 && userinput <= 20) {
//     alert("Today’s Weather is cool.")

// }
// else if (userinput <= 10) {
//     alert("OMG! Today’s weather is so Cool.")

// }


// solution - 11

// var firstnumber = +prompt("Enter first number");
// var secondnumber = +prompt("Enter second number");
// var result = prompt("Enter operator")

// if(result === "+"){
//   alert("the sum of " + firstnumber + " + "  + secondnumber + " = " + (firstnumber + secondnumber) )
// }
// else if(result === "-"){
//   alert("the subraction of " + firstnumber + " - "  + secondnumber + " = " + (firstnumber - secondnumber) )
// }
// else if(result === "*"){
//   alert("the multiplication of " + firstnumber + " X "  + secondnumber + " = " + (firstnumber * secondnumber) )
// }
// else if(result === "/"){
//   alert("the division of " + firstnumber + " / "  + secondnumber + " = " + (firstnumber / secondnumber) )
// }
// else if(result === "%"){
//   alert("the modulus of " + firstnumber + " % "  + secondnumber + " = " + (firstnumber % secondnumber) )
// }
// else{
//     alert("Invalid operator")
// }