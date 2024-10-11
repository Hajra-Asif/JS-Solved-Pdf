// ---- Chapter - 06 - 09 --- MATH EXPRESSIONS ----- 


//  solution-1

// var x = 5;

// document.write(`1 - Result:
//     The value of x = `+ x, "</br>")

// ++x
// document.write("</br> The value of  ++x =  " + x, "</br>")
// document.write("</br> now the value of  x =  " + x, "</br>" )


// x++

// document.write("</br> The value of  x++ =  " + x, "</br>" )
// document.write("</br> now the value of  x =  " + x, "</br>" )

// --x

// document.write("</br> The value of  --x =  " + x, "</br>" )
// document.write("</br> now the value of  x =  " + x, "</br>" )

// x--

// document.write("</br> The value of  x-- =  " + x, "</br>" )
// document.write("</br> now the value of  x =  " + x, "</br></br></br>" )


//  solution-2

// var a = 2 , b = 1;
//     //  1       0
// var result = --a - --b + ++b + b-- ; 

// //             1  - 0 + 1 + 1 

// document.write(`2 - Result:
//     The value of a = `+ a, "</br>")
// document.write(`The value of b = `+ b, "</br>")
// document.write(`The final output = `+ result, "</br></br></br>")





//  solution-3

// var name = prompt("What is your name")
// alert("Welcome to our page Ms " + name)

//  solution-5


// var tableof = +prompt("Enter table number");

// if(isNaN(tableof) || tableof === 0){
//     tableof = 5; 
// }

// for(i = 1 ; i <= 10 ; i++){
    
//     document.write("</br>", tableof + " X " + i + " = " + tableof * i + "</br>");
// }




//  solution-6

var sub1 = prompt("Enter subject one");
var sub2 = prompt("Enter subject two");
var sub3 = prompt("Enter subject three");
var marks = 100;
var mark1 = +prompt("Enter marks of : " + sub1);
var mark2 = +prompt("Enter marks of : " + sub2);
var mark3 = +prompt("Enter marks of : " + sub3);
var total = mark1 + mark2 + mark3;

document.write(`
    <br><br> <table  border="2">
      
    <tr>
    
    <th> Subject </th>
    <th> Total </th>
    <th> Obt Marks</th>
    <th> Percentage</th>
    
    </tr>
    
    <tr">
    <td>`+ sub1 +`</td>
    <td>`+ marks +`</td>
    <td>`+ mark1 +`</td>
    <td>`+ (mark1 / marks) * 100 +` %</td>
    
    </tr>
    
    <tr">
    <td>`+sub2+`</td>
    <td>`+marks+`</td>
    <td>`+mark2+`</td>
    <td>`+ (mark2 / marks) * 100 +` %</td>
    
    </tr>
    <tr">
    <td>`+sub3+`</td>
    <td>`+marks+`</td>
    <td>`+mark3+`</td>
    <td>`+ (mark3 / marks) * 100 +` %</td>
    
    </tr>
    </table>`);