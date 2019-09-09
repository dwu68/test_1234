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