let btn = document.querySelector('#submitBtn');
btn.addEventListener('click', function(){
   // error flags
   // flags are variables that keep track
   // if an event has happened or not
   let userNameTooShort = false;
   let emailIsInvalid = false;
   let passwordTooShort = false;

   // TO CHECK THE USER NAME
   // first, extact out the user name
   let username = document.querySelector('#username').value;
   // second, check if the username is valid
   if (username.length < 10) {
       userNameTooShort = true; // remember that the
                                // username is too short
   }

   // TO CHECK THE EMAIL
   let email = document.querySelector('#email').value;
   if (email.includes('@') == false || email.includes('.') == false) {
       emailIsInvalid = true;
   }

   let errorDiv = document.querySelector('#errors')

   // TO CHECK PASSWORD
   let password = document.querySelector('#password').value;
   if (password.length < 10) {
       passwordTooShort = true;
   }

   // clear all existing error messages
   errorDiv.innerHTML = '';

   let errorContainers = document.querySelectorAll('.error');
   for (let e of errorContainers){
       e.innerHTML = "";
   }

   if (userNameTooShort) {
       errorDiv.innerHTML += "<p>The user name is too short. Please provide at least ten characters</p>";
       document.querySelector('#error-username').innerHTML += "<p>The user name is too short. Please provide at least ten characters</p>";
   
    }
   if (emailIsInvalid) {
        errorDiv.innerHTML += "<p>The email is in an invalid format</p>";
        document.querySelector('#error-email').innerHTML += "<p>The email is in an invalid format</p>";
    }
   if (passwordTooShort){
       errorDiv.innerHTML += "<p>Your password is to short.</p>";
       document.querySelector('#error-password').innerHTML += "<p>Your password is too short</p>";
   }

   // check if there are any errors
   if (userNameTooShort || emailIsInvalid || passwordTooShort) {
       errorDiv.style.display = 'block';
   } else {
        // if no errors, hide the errorDiv element
        errorDiv.style.display = 'none';
        alert("Submission successful!");
   }
   

})
