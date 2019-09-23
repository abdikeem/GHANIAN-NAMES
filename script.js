function fillForm() {


  var yy = parseInt(document.getElementById("yrs").value);
  var mm = parseInt(document.getElementById("mnt").value);
  var dd = parseInt(document.getElementById("dy").value);
  var cc = parseInt(document.getElementById("cent").value);

  alert("Your Birthday is " +" "+ dd +" "+ mm +" "+ cc + yy);

  var day = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
  
  alert("The day of the week you were born is;" + day);

  var gender = document.querySelector('input[name="Gender"]:checked').value;

  if (gender == 2) {
    alert("You are Female");
  }
  if (day === 0) {
    alert("Your Akana name is Akosua");
  }
  else if (day === 1) {
    alert("Your Akana name is Adwoa");
  }
  else if (day === 2) {
    alert("Your Akana name is Abenaa");
  }
  else if (day === 3) {
    alert("Your Akana name is Akua");
  }
  else if (day === 4) {
    alert("Your Akana name is Yaa");
  }
  else if (day === 5) {
    alert("Your Akana name is Afua");
  }
  else if (day === 6) {
    alert("your Akana name is Ama");
  }
  else {

  {
    alert("You are Male");
  }

  if (day === 0) {
    alert("Your Akana name is Kwasi");
  }
  else if (day === 1) {
    alert("Your Akana name is Kwadwo");
  }
  else if (day === 2) {
    alert("Your Akana name is Kwabena");
  }
  else if (day === 3) {
    alert("Your Akana name is Kwaku");
  }
  else if (day === 4) {
    alert("Your Akana name is Yaw");
  }
  else if (day === 5) {
    alert("Your Akana name is Kofi");value="submit"
  }
  else if (day === 6) {
    alert("your Akana name is Kwame");
  }
  else {
    alert("Please try again with the correct data.");
  }
}
}
fillForm();