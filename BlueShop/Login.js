function register(e){
    event.preventDefault();
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var formMessage = document.getElementById('formMessage');
    var user = {
        firstname : firstname,
        lastname : lastname,
        email : email,
        password : password,
    };

    if(email === '' && password === '') {
        formMessage.innerHTML = "Email and Password can't be blank";
    }else if(password.length < 8) {
        formMessage.innerHTML= 'Password must be at least 8 characters';
    }else { 
        var json = JSON.stringify(user);
        localStorage.setItem('user_one', json);
        alert("Sign Up Success");
        window.location.href="logIn.html"
    }
}

function login(e) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var error = document.getElementById('error');
    var user = localStorage.getItem('user_one');
    var data = JSON.parse(user);
    if(user == null) {
        alert("Login failed");
    }else if (email === data.email && password === data.password){
        alert("Log In Success");
        window.location.href="BlueShop.html"
    }
    else {
        error.innerHTML = "Incorrect email or password.";
    }
}

function forgot(e) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var forgotMessage = document.getElementById('forgotMessage');
    var user = localStorage.getItem('user_one');
    var data = JSON.parse(user);
    
    if (email === '') {
        forgotMessage.innerHTML = 'Please enter your email.';
    }else if (email !== data.email) {
        forgotMessage.innerHTML = 'No account found with that email.';
    }else {
        forgotMessage.innerHTML = 'We have sent it to your email.';
    }
}

