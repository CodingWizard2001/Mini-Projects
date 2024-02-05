let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("Password");

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeIcon.src = "Assets/visible.png"
    }
    else{
        password.type = "password";
        eyeIcon.src = "Assets/eye.png"
    }
}