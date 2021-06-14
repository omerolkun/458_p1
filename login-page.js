const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginErrorMsg2 = document.getElementById("login-error-msg2");
const loginErrorMsg3 = document.getElementById("login-error-msg3");
const loginErrorMsg4 = document.getElementById("login-error-msg4");
const loginErrorMsg5 = document.getElementById("login-error-msg5");
const loginErrorMsg6 = document.getElementById("login-error-msg6");

var id;
var password;







loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    loginErrorMsg.style.opacity = 0;
    loginErrorMsg2.style.opacity = 0;
    loginErrorMsg3.style.opacity = 0;
    loginErrorMsg4.style.opacity = 0;
    loginErrorMsg5.style.opacity = 0;
    loginErrorMsg6.style.opacity = 0;
    
    var validated = true;

    id = loginForm.id.value;
    password = loginForm.password.value;
    localStorage.setItem("myid",id);

   // WE WILL HAVE 5 TEST CASES
   //CASE 1: THE USERNAME AND PASSWORD WILL BE CORRECT
   //CASE 2: THE USERNAME AND PASSWORD WILL BE INCORRECT
   //CASE 3: THE USERNAME AND PASSWORD MUST BE LESS THAN 40 LENGTH CHAR // DONE
   //CASE 4: THE USERNAME SHOUD BE CHECKED FOR INTEGER ONLY  //DONE
   //CASE 5: THE USERNAME AND PASSWORD FIELD SHOULD NOT BE BLANK AND WHITESPACES SHOULD NOT COUNT   //          DONE

   //THIS IS CASE 5
   
   //THIS IS CASE 5
   if (typeof id == "undefined" || id.trim() == '' || password.length == 0){
    console.log("ID cannot be blank");
    loginErrorMsg2.style.opacity = 1;
    validated = false;
}

else if (isNaN(id) == true){
    console.log("ID must be integer");
    loginErrorMsg4.style.opacity = 1;
    validated = false;
}
else if (id.length > 40 || password.length > 40){
    console.log("ID or Password must be less than 40 characters");
    loginErrorMsg6.style.opacity = 1;
    validated = false;
}
else if (id.length < 8 || id.length > 8){
    console.log("ID must be of length 8");
    loginErrorMsg5.style.opacity = 1;
    validated = false;
}

if (validated == true){
    var login_bool = checkDatabase(id, password);
    console.log("yup validated");
    console.log(login_bool);
    if (login_bool) {
        window.location.href="Success.html";
    }
   
     else{
        console.log("def wrong");
        loginErrorMsg.style.opacity = 1;
    }

    }

    console.log("im exiting the function");
})



//NOW col1 has username pairs and col2 has password pairs, so we need to check inside them 
function checkDatabase(id, password){
    var database = [];
    database[0] = "21202377";
    database[1] = "asd1asd";
    database[2] = "21503000";
    database[3] = "123456";
    database[4] = "21701610";
    database[5] = "asd";

    
    var i = 0;
    for (i = 0; i < checkDatabase.length; i++){
        if (database[i].localeCompare(id) == 0){
            
            if (database[i+1].localeCompare(password) == 0){
                return true;
               
            }
           
            else { ;return false;}

        }
    }
   return false;

/*
   var database = [];
   database[0] = "21202377";
   database[1] = "asd1asd";
   database[2] = "21503000";
    database[3] = "123456";


   var i = 0;
   for (i = 0; i < col1.length; i++){
        if (col1[i].localeCompare(id) == 0 && col2[i].localeCompare(password)==0){
                return true;
            }
            else {return false;}

       }
        return false;
        */
    }
    
  