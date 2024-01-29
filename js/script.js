//Adding the js styles

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInput();
})

function checkInput(){
    //Get the value from the input

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue ===''){

        setErrorFor(username, 'Username can not be blank');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside samll
    small.innerText = "Enter correct password";


    //add error clas
    formControl.className = 'form-control error';
}
