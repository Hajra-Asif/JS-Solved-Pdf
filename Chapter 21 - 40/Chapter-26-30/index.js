// ---- Chapter - 26 - 30 : MATH METHODS ----- 


//  solution-1 

// var userinput = +prompt("enter a positive number");

// var round = Math.round(userinput);
// var floor = Math.floor(userinput);
// var ceil = Math.ceil(userinput)
// document.write ("Number : " + userinput + "<br> Round off value : " + round + "<br> Floor value : " + floor + "<br> Ceil value : " + ceil);
// document.write("<br><br>")


//  solution-2

// var userinput = +prompt("enter a negative number");

// var round = Math.round(userinput);
// var floor = Math.floor(userinput);
// var ceil = Math.ceil(userinput)
// document.write ("Number : " + userinput + "<br> Round off value : " + round + "<br> Floor value : " + floor + "<br> Ceil value : " + ceil);
// document.write("<br><br>")


//  solution-3

// var userinput = +prompt("enter a negative number");
// var absolute = -userinput;
// if(userinput < 0){

//     document.write("The absolute value of : "  + userinput + " is : " + absolute);

// }
// else{
//     document.write("The absolute value of : " + userinput + " is : " + userinput );
// }
// document.write("<br><br>")


//  solution-4

var input = Math.random() * 10;
var floor = Math.floor(input) + 1;
document.write("Random dice value is : " + floor + "<br>" );
document.write("Random dice value is : " + floor + "<br>" );


document.write("<br><br>")

// solution - 5

// var myinput = Math.random() * 2;
// var floor = Math.floor(myinput) + 1;

// var userinput = +prompt(`choose heads or tails
//     Enter 1 or 2 `)

// if(userinput === floor){
//     document.write("You have choosen heads")
// }
// else if(userinput > 2 || userinput < 1){
//     document.write("please enter a number : 1 or 2")

// }
// else{
//     document.write("You have choosen tails")
// }

// document.write("<br><br>")


// solution - 6

var input = Math.random() * 100;
var floor = Math.floor(input) + 1;
document.write("random number between 1 and 100 : " + floor + "<br>" );
document.write("<br><br>")

// solution - 7

// var weight = parseFloat(prompt("Enter your weight"))
// weight = weight.toFixed(2)
// document.write("Your weight is : " +  weight + "kgs" );
// document.write("<br><br>")


// solution - 8

// var secret = Math.random() * 10;
// var secretnumber = Math.floor(secret) + 1;
// var guess = +prompt("Guess a number between 1 and 10");
// if(guess === secretnumber){
//     document.write("You have guessed the number correctly");
// }
// else if(guess === secretnumber + 1 || guess === secretnumber - 1){
//     document.write("You are too closed to the corect number");
// }
// else(
//     document.write("You have guessed the number incorrectly")
// )
    
