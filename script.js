const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
	setErrorFor(username, 'Username cannot be blank');
	} else if (usernameValue.search(/[A-Z]/)===-1){
    setErrorFor(username,'Username should have atleast 1 uppercase letter');
    return false;
    } else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	if(passwordValue.length<8){
		setErrorFor(password,'Password should have atleast 8 characters');
		return false;
	}else if(passwordValue.search(/[0-9]/)===-1){
		setErrorFor(password,'Password should have atleast 1 number');
		return false;
	}else if(passwordValue.search(/[a-z]/)===-1){
		setErrorFor(password,'Password should have atleast 1 lowercase letter');
		return false;
	}else if(passwordValue.search(/[A-Z]/)===-1){
		setErrorFor(password,'Password should have atleast 1 uppercase letter');
		return false;
	}else if(passwordValue.search(/[!\@\#\$\%\^\&\*\(\)\_\+\-\,\<\=\>\?]/)==-1){
		setErrorFor(password,'Password should have atleast 1 special character');
		return false;
	}
	else{
		setSuccessFor(password);
	}

	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function myFunction() {
  var x = document.getElementById("password");
  if (x.type==="password"){
    x.type="text"
    document.getElementById('hide').style.display="inline-block";
    document.getElementById('show').style.display="none";
  }
  else{
    x.type="password"
    document.getElementById('hide').style.display="none";
    document.getElementById('show').style.display="inline-block";
  }
}

