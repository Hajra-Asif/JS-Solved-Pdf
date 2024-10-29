// ---- Chapter - 05 --- MATH EXPRESSIONS ----- 


//  solution-1

var num1 = 23, num2 = 43; 
var addition = num1 + num2;

document.write("1 - The sum of ", num1 +   " and " + num2 + " is " +  addition + "</br>" )



//  solution-2

var sub = num1 - num2;
var multiplication = num1 * num2;
var modulus = num1 % num2;

document.write("2  - The subraction of ", num1 +   " and " + num2 + " is " +  sub + "</br>" )
document.write("  - The multiplication of ", num1 +   " and " + num2 + " is " +  multiplication + "</br>" )
document.write("  - The modulus of ", num1 +   " and " + num2 + " is " +  modulus + "</br>" )


//  solution-3

var variable;
document.write("<br> 3 - Value after variable declaration is " + variable);

variable = 5;
document.write("<br>Initial value: " + variable); 

variable++;
document.write("<br>Value after increment is: " + variable); 

variable +=  7;
document.write("<br>Value after addition is: " + variable); 

variable--;
document.write("<br>Value after decrement is: " + variable); 

variable %= 3;
document.write("<br>The remainder is: " + variable); 


//  solution-4

var ticket = 900;
var ticket5 = ticket * 5;

document.write("</br></br>4 - Total cost to buy 5 tickets to a movie is " + ticket5, "</br>")



//  solution-5

var number = +prompt("Enter any number");

for( i = 1; i <= 10; i++){

    document.write("</br>", number + " x " + i + "  =  " + number*i, "</br>" )

}



//  solution-6

var cel = 38;
var fer =  ( cel * 9/5) + 32 ;

document.write("</br></br> 6 - ", cel + "C" + " is " + fer +  "F"  )


var fer = 74;
var cel = (fer-32) * 5/9;

document.write("</br></br> - ", fer + "F" + " is " + cel +  "C"  );



//  solution-7

var item1 = 1100;
var item2 = 1500;
var Qitem1 = 2;
var Qitem2 = 5;
var sc = 300;
var total = (item1 * Qitem1) + (item2 * Qitem2) + sc;

document.write("</br></br> <h1>7 - Shopping Cart </h1> ")
document.write("</br> Price of Shirt = " + item1)
document.write("</br> Quantity of Shirts = " + Qitem1)
document.write("</br> Price of jeans pant = " + item2)
document.write("</br> Quantity of jeans pants = " + Qitem2)
document.write("</br> Shipping charges = " + sc)
document.write("</br></br> Total cost of your order is " + total, "</br>" )


//  solution-8

var totalmarks = 1400;
var marksobtained =  989;
var percentage = (marksobtained / totalmarks) * 100;

document.write("</br></br>8 - Total marks = " + totalmarks)
document.write("</br> Marks obtained = " + marksobtained)
document.write("</br> Percentage = " + percentage)


//  solution-9

var dollars = 104.80;
var riyal = 28;
var pkr = (dollars * 10) + (riyal * 25);

document.write("</br></br> <h1>9 - Currency in PKR </h1> ")
document.write("</br> The total currency in pkr: " + pkr, "</br>")


//  solution-10

var ari = 6; ari += 5 ; ari *= 10; ari /= 2;
document.write("</br></br>10 - The solution of arithmatic expression is : " + ari)



//  solution-11



var currentyear = 2024;
var birthyear = 2002;
var totalage = currentyear - birthyear;
document.write("<br><br><h1>11 - Age Calculator</h1>");
document.write("<br>Current Year : " + currentyear);
document.write("<br>Birth Year : " + birthyear);
document.write("<br>Your Age is : " + totalage);



//  solution-12

var radius = 40;
var circum = 2 * 3.142 * radius;
var area = 3.142 * radius**2 ;


document.write("<br><br><h1>12 - The Geometrizer</h1>");
document.write("<br>Radius of a circle : " + radius);
document.write("<br>The circumference is : " + circum);
document.write("<br>The area is : " + area);


//  solution-13


var snack = "Dark chocolate"
var myage = 21 ;
var maxage = 50 ;
var amount = 2 ;
var totalamount = (maxage - myage) * 3;


document.write("<br><br><h1>13 - The Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snack : " + snack);
document.write("<br>Current age : " + myage);
document.write("<br>Estimated Maximum Age : " + maxage);
document.write("<br>Amount of snacks per day : " + amount);
document.write("<br>You will need " + totalamount + " chocolate chip to last you until the ripe old age of " + maxage);

