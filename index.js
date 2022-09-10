function setError(id,error){
  document.getElementById(id).getElementsByClassName('ferror')[0].innerHTML = error;
}

function validateForm(){
  var returnValue = true;
   var name = document.forms["myForm"]["fName"].value;
   if (name.length<3){
     setError("name" , "*Length of name is too short!");
     returnValue = false;
   }
   var email = document.forms["myForm"]["fEmail"].value;
   if (email.length>40){
     setError("email", "*Length of email is too long!");
     returnValue = false;
   }
   var number = document.forms["myForm"]["fPhone"].value;
   if (number.length!=10){
     setError("phone", "*Phone number should be of 10 digits!");
     returnValue = false;
   }
   var message = document.forms["myForm"]["fMessage"].value;
   if (message.length>51){
     setError("message", "*Message should be under 50 characters!");
     returnValue = false;
   }
   return returnValue;
}
