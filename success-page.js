
var x=localStorage.getItem("myid");

document.getElementById("username_success").textContent = x; 

function validate()
{
    window.location.href="login.html";
}