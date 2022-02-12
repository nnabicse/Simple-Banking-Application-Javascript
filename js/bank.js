document.getElementById("login-submit").addEventListener('click', function(){
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    if(userEmail == "abc@def.com" && userPassword == 'secret'){
        window.location.href = "banking.html";
    }
    else{
        console.log("invalid Password");
    }
    
})


    