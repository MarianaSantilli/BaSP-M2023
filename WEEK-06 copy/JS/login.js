var form = document.getElementById('form');
var inputEmail = document.getElementById('email');
var inputPassword = document.getElementById('password');
var emailError = document.getElementById ('invalid-email');
var passwordError = document.getElementById ('invalid-password');

var mistakes = '';
//email validation

var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

inputEmail.addEventListener ('blur', function(){
    if (!emailExpression.test (inputEmail.value)) {
        emailError.style.display = 'block';
        alert('it is not a valid email');
    }
});

inputEmail.addEventListener('focus', function (){
    emailError.style.display = 'none';
});

//password validation

inputPassword.addEventListener('blur', function(){
    if(inputPassword.value.length <= 8) {
        passwordError.style.display = 'block';
    }
});

inputPassword.addEventListener('focus', function(){
    passwordError.style.display = 'none';
});

//submit event

form.addEventListener('submit', function(event){
    if(!emailExpression.test (inputEmail.value)) {
        emailError.style.display = 'block';
        mistakes += 'Invalid email'
        event.preventDefault();
    }
    if(inputPassword.value.lenght < 8) {
        passwordError.style.display = 'block';
        mistakes += 'Password must be at least 8 characters long';
        event.preventDefault();
    }
    if(mistakes !== '') {
        alert (mistakes);
    }

    });

form.addEventListener('submit', function(event){
    if(!emailExpression.test (inputEmail.value)) {
        emailError.style.display = 'block';
        event.preventDefault();
    }
});

//login button validation

document.getElementById ('login-btn').addEventListener ('click', function() {
mistakes = ''
if (!emailExpression.test(inputEmail.value)){
    emailError.style.display = 'block'
    mistakes += 'invalid email';
}
if (inputPassword.value.lenght < 8){
    passwordError.style.display = 'block';
    mistakes += 'Password must be at least 8 characters long';
}
if (mistakes !== '') {
    alert (mistakes);
}
});