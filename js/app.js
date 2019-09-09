function nameCheck(){
    //clear for resubmits
    document.getElementById("welcome_msg").innerHTML = "";

    var name = document.getElementById('Name').value;
    var check = confirm("Is " + name + " your name?");
    if (check == true){
        document.getElementById("welcome_msg").innerHTML = name + ", welcome to Digi-Safari Git workshop!";
    }
    else{
        alert("Please enter full name.");  
        document.getElementById("welcome_msg").innerHTML = "Welcome!";     
    }
}

function checkLeapYear() {
    //clear for resubmits
    document.getElementById("result").innerHTML = "";

    var year = document.getElementById("year").value;
    var answer = "Not a leap year"

    if (year % 4 == 0) {
        answer = "It's a leap year!";
    }
    if (year % 100 == 0) {
        answer = "Not a leap year";
    }
    if (year % 100 == 0 && year % 400 == 0) {
        answer = "It's a leap year!";
    }
