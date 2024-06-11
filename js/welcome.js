
// for login the user
var username = localStorage.getItem('nameofUsername')
if(username) {
    document.getElementById('userName').innerHTML = "Welcome " + username
}



// for logout
Logout.addEventListener('click',logout)
function logout() {
    // localStorage.removeItem('nameofUsername')
    window.location.replace("./index.html");

}


