// Dom Manuplation 

let userName = document.getElementById('name');
let phoneNumber = document.getElementById('phone');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submit-btn');
let errorTag = document.getElementById('error');



// event listener 
submitBtn.addEventListener('click', function(){

    // check blank Fields
    if(userName.value == "" || 
        phoneNumber.value == "" || 
        email.value == "" || 
        password.value == "" ){

        // alert('Flied is Empty Pleace Full Fild The Empty Options');
        errorTag.innerHTML = 'Flied is Empty Pleace Full Fild The Empty Options';
        return;
    }

    // Check Name 
    if(userName.value.length < 5 ){
        // alert('Name length should be more than 5 latters.')
        errorTag.innerHTML = 'Name length should be more than 5 latters.';
        return;

    }

    // Check phone 
    if(phoneNumber.value.length != 11){
        // alert('Phone number must be in 11digits!')
        errorTag.innerHTML = 'Phone number must be in 11digits!';
        return;
    }

    // check password 
    if(password.value.length < 8){
        // alert('Password length should more than 7 char!')
        errorTag.innerHTML = 'Password length should more than 7 char!';
        return;
    }

})