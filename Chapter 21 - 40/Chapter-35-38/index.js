// ---- Chapter - 35 - 38 : Functions ----- 


//  solution-1 

function date() {
    var currentdate = new Date()
    document.write("Today's date and time is : <br>" + currentdate);
    document.write("<br><br>")
}

date();




//  solution-2


// function greet(){
//      var f = prompt("Enter your first name");
//      var l = prompt("Enter your last name");
//      var fullname = f + " " + l;
//      document.write("Hello, " + fullname + " !");
//      document.write("<br><br>")
// }

// greet();

//  solution-3

// function sum(){
//     var a = parseInt(prompt("Enter first number"));
//     var b = parseInt(prompt("Enter second number"));
//     var addition = a + b;
//     document.write("The sum of " + a + " and " + b + " is " + addition );
// }

// sum();


//  solution-4


function operator(num1, operation, num2) {

    if (operation === "+") {
        return num1 + num2;
    }
    else if (operation === "-") {
        return num1 - num2;
    }
    else if (operation === "*") {
        return num1 * num2;
    }
    else if (operation === "/") {
        return num1 / num2;
    }
    else {
        return "Invalid operation";
    }
}


var operationResult = operator(7, "*", 8);
document.write("The multiplication result is " + operationResult)



document.write("<br><br>")

// solution - 5

function square(num) {

    return (num * num)
}
document.write("The square of argumrmnt 8 is " + square(8));


document.write("<br><br>")


// solution - 6

function factorial(n){

    result = 1;
    for( i = 2 ; i <= n ; i++){

        result *= i;

    }
 return result
}

document.write("The factorial of 5 is " + factorial(5));
document.write("<br><br>");

// solution - 7

// function counting(start, end){
     
//     var start = parseInt(prompt("enter starting number"));
//     var end = parseInt(prompt("enter ending number"));
//     for(i = start ; i <= end ; i++){
//            document.write( i + "<br>")
//     }
// }

// counting();

// document.write("<br><br>")


// solution - 8

// function outer(base, perpendicular){

//     function inner(){

//         var base = parseInt(prompt("Enter the value of base"));
//         var perpendicular = parseInt(prompt("Enter the value of perpendicular"));
//         var Hypotenuse = (base * base ) + (perpendicular * perpendicular);
//         return Hypotenuse;

//     }

//     Hypotenuse = inner();
//     return Hypotenuse;
// }

// document.write("The hypotenuse of triangle is " + outer() + "<br>");
// document.write("<br><br>")

// solution - 9

function area(width , height){
    var area = width * height;
    return area;

}

var rectangle = area(40, 32);
document.write("The area of rectangle is " + rectangle + "<br>");

document.write("<br><br>");

// solution - 10

function string(){
    
}

document.write("<br><br>")

// solution - 11

var currentdate = new Date();
var hours = currentdate.getHours();
document.write("<br>Current date: <br>" + currentdate + "<br>");

currentdate.setHours(hours + 1);
document.write("1 hour after it will be: " + currentdate + "<br>");
document.write("<br><br>")

// solution - 12

var currentDate = new Date();
document.write("Current date: " + currentDate + "<br>");
currentDate.setFullYear(currentDate.getFullYear() - 100);
document.write("100 years back, it was: " + currentDate + "<br>");
document.write("<br><br>")

// solution - 13

// var userage = parseInt(prompt("Enter your age"))
// var year = 2024 - userage;
// document.write("You were born in the year: " + year + "<br>");
// document.write("<br><br>")

// solution - 14

document.write("<h1>K-Electric Bill</h1>")

var customer = "Affan Iqbal";
var month = "October";
var units = 274;
var charges = 16;
var netamount = units * charges;
var latecharge = netamount + 1400;

document.write("Customer name : " + customer + "<br>");
document.write("Month : " + month + "<br>");
document.write("Number of units : " + units + "<br>");
document.write("Charges of units : " + charges);
document.write("<br><br>")
document.write("Net Amount Payable (within Due Date) : " + netamount + "<br>");
document.write("Late payment surcharg : 1400" + "<br>");
document.write("Gross Amount Payable (after Due Date) :" + latecharge + "<br>");

