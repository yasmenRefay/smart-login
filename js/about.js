// tasks 
// 1- select all elements(by id)
// 2- cheak the data after click on btn (if condition)
// 3- if the data correct return to new navigation 




// Global variables 
var inputs = document.querySelectorAll('.selected');
var loginbtn = document.getElementById('loginbtn');
var signupBtn = document.getElementById('signupBtn');
var emailInp = document.getElementById('emailInp');
var passlInp = document.getElementById('passlInp');
var Logout = document.getElementById('Logout');

var newArray =[];



// check the array 
if(localStorage.getItem('signUp') !==null ) {
    newArray = JSON.parse(localStorage.getItem('signUp'))
}else {
    newArray=[]
}


// validation of inputs 
for (var i=0 ; i<inputs.length; i++){
    inputs[i].addEventListener('input',function(e){
        var inptValue = e.target.value ;
        var iputId = e.target.id ;
        validationFun(inptValue ,iputId)
    })

    function validationFun(value,id){
        regex = {
            emailInp:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            passlInp:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        }

    var elm = document.getElementById(id) ;

    if(regex[id].test(value) == true){
        passlInp.nextElementSibling.classList.replace('d-block' , 'd-none')
    }else{
        passlInp.nextElementSibling.classList.replace('d-none' , 'd-block')
    }

    }
}



// for check inputs empty or not 
loginbtn.addEventListener('click',empfun)
function empfun(){
var x = document.getElementById("emailInp").value;
var y = document.getElementById("passlInp").value;
    if( x  == "" || y == ""){
        document.getElementById('exist').innerHTML = '<span>All inputs is required</span>'
    }else{
            loginFun()
        }
}


// for login the user
function loginFun(){
    var emaill = emailInp.value;
    var passs = passlInp.value;
    for(var i=0 ; i<newArray.length ; i++){
        if(newArray[i].email.toLowerCase() === emaill.toLowerCase() && newArray[i].password.toLowerCase() === passs.toLowerCase()) {
            localStorage.setItem('nameofUsername',newArray[i].name)
            window.location.replace("./welcome.html");
        }else {
            document.getElementById('exist').innerHTML = '<span>incorrect email or password</span>'
        }
    }
}


// sign up button 
signupBtn.addEventListener('click',myFunction)
function myFunction() {
    window.location.replace("./signup.html");
}












