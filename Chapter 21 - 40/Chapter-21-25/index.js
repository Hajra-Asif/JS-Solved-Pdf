// ---- Chapter - 21 - 25 : STRING METHODS ----- 


//  solution-1 

// var username = prompt("Enter your first name");
// var userlastname = prompt("Enter your last name");
// var userfull = username + " " + userlastname;
// alert("Welcome to our page " + userfull)

//  solution-2

//    var phone = prompt("What's your favourite Mobile phone?")
//    var string = "My favourite phone is " + " " + phone + "  " + "The length of string is : ";

//    document.write("</br> " + string  + string.length + "<br>" )

// //  solution-3

var country = "pakistan"
document.write ("Country : " + country + "<br> Index of n : " + country.indexOf("n"));
document.write("<br><br>")

//  solution-4 

var string = "Hello World";
document.write ("String : " + string + "<br> Last Index of L : " + string.lastIndexOf("l"));
document.write("<br><br>")


//  solution-5


var country2 = "pakistan"
document.write ("String : " + country2 + "<br> Character at index 3  : " + country2[3]);
document.write("<br><br>")

// solution - 6

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// alert("Welcome to our page " + fullName)

// document.write("<br><br>")


// solution - 7

var city = "Hyderabad";
document.write("City : " + city + "<br>");
city = city.replace("Hyder" , "Islam");
document.write("After replacement : " + city );
document.write("<br><br>")

// solution - 8

var message = "Ali and Sami are best friends. They play cricket and football together. ";
document.write("Message : " + message + "<br>");
message = message.replace(/and/gi , "&")
document.write("After replacement : " +  message );
document.write("<br><br>")


// solution - 9

var value = "472";
document.write("Value : " + value + "<br> Type of " + value + " : " + typeof value);
value = parseInt("472");
document.write("<br>")
document.write("Value : " + value + "<br> Type of " + value + " : " + typeof value);
document.write("<br><br>")


// solution - 10

// var user = prompt("Enter your fav snack in lowercase");
// document.write("User input : " + user + "<br> Uppercase : " + user.toUpperCase())
// document.write("<br><br>")


// solution - 11

// titlecase topic not done yet


// solution - 12


var num = 35.36;
document.write("Number : " + num + "<br> Type of " + num + " : " + typeof num + "<br>");
num2 = num.toString().replace("." , "");
document.write("Number : " + num2 + "<br> Type of " + num2+ " : " + typeof num2 + "<br>");
    
document.write("<br><br>")

// solution - 13

// var username = prompt("Enter your username:");

// if (username.includes("@") || username.includes(",") || username.includes(".") || username.includes("!")) {

//   alert("Please enter a valid username. Special characters like @, !, . , are not allowed.");

// } 
// else {
//   alert("Username is valid: " + username);
// }

// document.write("<br><br>")

// solution - 14

// var dessert = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userinput = prompt("What do you want to order from our bakery?").toLowerCase();
// var flag = false;


// for (var i = 0; i < dessert.length; i++) {

//     if (userinput == dessert[i].toLowerCase()) {
//         flag = true;
//         alert(userinput + " is available at index " + i)
//         break;
//     }

// }
// if(!flag){
//     alert(userinput + " is not available ")
// }

// document.write("<br><br>")

// solution - 15

var password = prompt("Enter your password:");

if (password[0] >= '0' && password[0] <= '9') {
    alert("Password cannot begin with a number");
} 
else if (password.length < 6) {
    alert("Password must be at least 6 characters long");
} 
else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    alert("Password must contain both alphabets and numbers");
} 
else {
    alert("Password is valid");
}


// solution - 16

var uni = "university of karachi"

for(i = 0; i < uni.length ; i++){
 document.write(uni[i] + "<br>")
}



// solution - 17

// var userinput = prompt("Enter country name");
// document.write ("<br> Last Character of input : " + userinput[userinput.length-1]);
// document.write("<br><br>")

// solution - 18

