// user value
let userName = document.getElementById('username');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submit-btn');

// My Database 

let myUser = 1977548952;
let myPass = 'jubu';

submitBtn.addEventListener('click', function(){
    if(userName.value == myUser && password.value == myPass){
        console.log('Yes! Your Account is approved');
    }else{
        console.log('Sorry! Your Account is not approved');
    }
});