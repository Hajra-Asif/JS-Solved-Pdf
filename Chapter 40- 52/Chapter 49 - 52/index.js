// ---- Chapter - 49 - 52 : EVENTS ----- 




function displayData(event) {
    event.preventDefault();

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   
    document.getElementById("displayName").innerText = "Name: " + name;
    document.getElementById("displayEmail").innerText = "Email: " + email;
    document.getElementById("displayPassword").innerText = "Password: " + password;

   
    document.getElementById("signupForm").reset();
}



function over(){
    document.getElementById("image").src = "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1727470786-samsung-galaxy-s23-fe-cell-phone-66f71cb2b39a2.jpg?crop=0.9989795918367347xw:1xh;center,top&resize=980:*"
}


function out(){
    document.getElementById("image").src = "https://www.cnet.com/a/img/resize/7b7ea5c06b00df75839e4deddda16ebbe67185ef/hub/2024/01/24/73947584-67eb-4e99-b66d-207b4c0e1eda/samsung-galaxy-s24-ultra-1887.jpg?auto=webp&width=1200"
}


var count = 0;
function increase(){
    count++
    document.getElementById("count").innerHTML = "This increase button is clicked for " + count + " times "
}

function decrease(){
    count--
    document.getElementById("count").innerHTML = "This decrease button is clicked for " + count + " times "
}

