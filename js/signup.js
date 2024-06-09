var inputs = document.querySelectorAll('.selected')
var loginbtn = document.getElementById('loginbtn')
var signinBtn = document.getElementById('signinBtn');
var nameInp = document.getElementById('nameInp');
var emailInp = document.getElementById('emailInp');
var passlInp = document.getElementById('passlInp');
var productlist =[];





for (var i=0 ; i<inputs.length; i++){
    inputs[i].addEventListener('input',function(e){
        var inptValue = e.target.value ;
        var iputId = e.target.id ;
        validationFun(inptValue ,iputId )
    })


    function validationFun(value,id){
        regex = {
            nameInp:/^[a-z]{3,}$/,
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
var x = document.getElementById("nameInp").value;
var y = document.getElementById("emailInp").value;
var z = document.getElementById("passlInp").value;
    if( x  == "" || y == "" || z == ""){
        document.getElementById('exist').innerHTML = '<span>All inputs is required</span>'
    }else{
        document.getElementById('exist').innerHTML = '<span class="text-success">success</span>'
        }
}



// sign in button 
signinBtn.addEventListener('click',myFunction)
function myFunction() {
    window.location.replace("http://127.0.0.1:5500/index.html?input1=gsfs%40gmail.com&input2=61252636347384gg");
}




// to save the data in local storage 
if(localStorage.getItem('signUp') !== null) {
    productlist= JSON.parse(localStorage.getItem('signUp'));
}else{
    productlist=[];
}




// to store all value as object
loginbtn.addEventListener('click',addfun)
function addfun(){
    var signUp = {
        name:nameInp.value,
        email:emailInp.value,
        password:passlInp.value,
    }
    productlist.push(signUp)
    empfun()
    localStorage.setItem('signUp',JSON.stringify(productlist))
// for check email is exist
    var namee = nameInp.value;
    var emaill = emailInp.value;
    var passs = passlInp.value;
    for(var i=0 ; i<productlist.length -1 ; i++){
        if(productlist[i].email === emaill ){
            document.getElementById('exist').innerHTML = '<span>try another Email</span>'
        }
        if(productlist[i].email === emaill && productlist[i].password === passs) {
            document.getElementById('userName').innerHTML = "Welcome " + productlist[i].name
        }
    }
    resetForm() 
}




// to reset the form after login 
function resetForm() {
    nameInp.value=null;
    emailInp.value=null;
    passlInp.value=null;
}




















