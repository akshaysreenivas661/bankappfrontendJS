//create account- register a new account

function Register(){
    //1. fetch the values from the html page
    acno=reg_acno.value;
    uname=reg_uname.value;
    pswd=reg_pswd.value;
    balance=2000;


//2. create acc details object

acnoDetails={
    acno,
    uname,
    pswd,
    balance

}

//3. check if acno is stored; present in local storage
if(acno in localStorage){
    alert('acno already presnt');
    
}
else{
    localStorage.setItem(acno,JSON.stringify(acnoDetails));
    alert('Register successfulluy');
    window.location.href="index.html"
    
}
}

//login
function Login(){
    //1.fetch the details
    acno=login_acno.value;
    pswd=login_pswd.value;


    //2 check if the account number is present in the localstorage
    if(acno in localStorage){
        acnoDetails=JSON.parse(localStorage.getItem(acno))
        console.log(acnoDetails["pswd"]);

        //compare
        if(pswd==acnoDetails.pswd){
            alert('Login Successful');
            window.location.href="home.html"}
        else{
            alert('Incorrect password');

        }
    } 
    else{
        alert('Invalid Account number');
    }
}