// ---- Chapter - 31 - 34 : DATE METHODS ----- 


//  solution-1 

var currentdate = new Date()
document.write("Today's date and time is : <br>"+currentdate);

document.write("<br><br>")


//  solution-2

var months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  var monthindex = currentdate.getMonth();
  var month = months[monthindex]
  document.write("Current month is : "+month + "<br>");  
document.write("<br><br>")


//  solution-3

var days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  var dayindex = currentdate.getDay();
  var day = days[dayindex].slice(0,3);
  document.write("Today is : "+ day + "<br>"); 
document.write("<br><br>")


//  solution-4

// var userinput = prompt("Enter any day").toLowerCase();

// if(userinput === "saturday" || userinput === "sunday"){
// alert("It's a fun day")
// }
// else{
//     alert("It's not a fun day")
// }


// document.write("<br><br>")

// solution - 5

var date = currentdate.getDate();
if(date > 15){
    document.write("First fifteen days of the month <br>")
}
else[
    document.write("Last fifteen days of the month<br>")
]

document.write("<br><br>")


// solution - 6

var currentdate = new Date()
var date1 = currentdate.getTime();
var minute = date1 / 60000;
document.write("<br>Current date : <br>"+currentdate);
document.write("<br>Elapsed milliseconds since Jan 1, 1970: <br>"+date1);
document.write("<br>Elapsed minutes since Jan 1, 1970: <br>"+minute);

console.log(date1);

console.log(minute);



document.write("<br><br>");

// solution - 7

var hours = currentdate.getHours();

if(hours < 12){
    document.write("IT's AM");
 
}
else{
    document.write("IT's PM");
}


document.write("<br><br>")


// solution - 8

var date = new Date(2024, 11, 31);
document.write("Later Date : " + date);
document.write("<br><br>")

// solution - 9

var date1 = new Date(2024, 9, 23);
var date2 = new Date(2024, 2, 14);

var timeofdate1 = date1.getTime();
var timeofdate2 = date2.getTime();

var timediff = timeofdate1 - timeofdate2;

var time = timediff / (1000 * 60 * 60 * 24);
document.write(time + " days have passed since 1 Ramzan 2024")
document.write("<br><br>")

// solution - 10

var date1 = new Date(2024, 9, 23);
var date2 = new Date(2024, 9, 1);

var timeofdate1 = date1.getTime();
var timeofdate2 = date2.getTime();

var timediff = timeofdate1 - timeofdate2;

var time = timediff / 1000;
document.write("On reference date : " + date1 + "<br>");
document.write(time + " seconds have passed since 1 October 2024")
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

document.write("Customer name : " + customer+ "<br>");
document.write("Month : " + month+ "<br>");
document.write("Number of units : " + units+ "<br>");
document.write("Charges of units : " + charges);
document.write("<br><br>")
document.write("Net Amount Payable (within Due Date) : " + netamount+ "<br>");
document.write("Late payment surcharg : 1400"+ "<br>" );
document.write("Gross Amount Payable (after Due Date) :" + latecharge+ "<br>" );

