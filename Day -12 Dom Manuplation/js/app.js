// Dom Manuplate 

let userName = document.getElementById('name');
let phoneNum = document.getElementById('phone');
let emailAdress = document.getElementById('email');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submit-btn');

// Error Msg 
let errorTag = document.getElementById('error');

// All Input 
let inputAll = document.querySelectorAll('input'); 


submitBtn.addEventListener('click' , function(){

    // Blank Feilds Check 

    if(userName.value == "" ||
        phoneNum.value == "" ||
         emailAdress.value == "" ||
          password.value == "" )
    {

        // alert('if are you register pleace full fill all fields');
        // errorTag.innerHTML = 'if are you register pleace full fill all fields';
        showError("if are you register pleace full fill all fields");
        return;

    }

    // userName length check 

    if(userName.value.length < 5 ){

        // alert('Place Enter Name Feild More The Up to 5 characters!');
        // errorTag.innerHTML = 'Place Enter Name Feild More The Up to 5 characters!';
        showError("Place Enter Name Feild More The Up to 5 characters!");
        return;

    }

    // phone 11 digit check 

    if(phoneNum.value.length != 11){

        // alert('Phone Number Not Be 11 digit ');
        // errorTag.innerHTML = 'Phone Number Not Be 11 digit';
        showError("Phone Number Not Be 11 digit");
        return;
    }

    // password character check 

    if(password.value.length < 8 ){

        // alert('Password Must be 8 character ');
        // errorTag.innerHTML = 'Password Must be 8 character';
        showError("Password Must be 8 character");
        return;

    }

});

// showError 
function showError(errortext){
    errorTag.innerHTML = errortext ;
}

// Hide Error
function hideError(){
    errorTag.innerHTML = '';
}

// input 

inputAll.forEach(function(item){

    // add event loop
    item.addEventListener('keypress', function(){
        hideError();
    });

});