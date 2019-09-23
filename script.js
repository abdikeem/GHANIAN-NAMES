<<<<<<< HEAD
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
=======
//General Array Function
function MakeArray(n) {
 this.length = n;
 for (var i = 1; i <=n; i++) {
   this[i] = 0;
 }
}
//Initialize Days of Week Array
days = new MakeArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"
//Initialize Months Array
months = new MakeArray(12);
months[1] = "January"
months[2] = "February"
months[3] = "March"
months[4] = "April"
months[5] = "May"
months[6] = "June"
months[7] = "July"
months[8] = "August"
months[9] = "September"
months[10] = "October"
months[11] = "November"
months[12] = "December"
//Day of Week Function
function compute(form) {
 var val1 = parseInt(form.day.value, 10)
 if ((val1 < 0) || (val1 > 31)) {
    alert("Day is out of range")
 }
 var val2 = parseInt(form.month.value, 10)
 if ((val2 < 0) || (val2 > 12)) {
    alert("Month is out of range")
 }
 var val2x = parseInt(form.month.value, 10)
 var val3 = parseInt(form.year.value, 10)
 if (val3 < 1900) {
    alert("You're that old!")
 }
 if (val2 == 1) {
    val2x = 13;
    val3 = val3-1
 }
 if (val2 == 2) {
    val2x = 14;
    val3 = val3-1
 }
 var val4 = parseInt(((val2x+1)*3)/5, 10)
 var val5 = parseInt(val3/4, 10)
 var val6 = parseInt(val3/100, 10)
 var val7 = parseInt(val3/400, 10)
 var val8 = val1+(val2x*2)+val4+val3+val5-val6+val7+2
 var val9 = parseInt(val8/7, 10)
 var val0 = val8-(val9*7)
 form.result1.value = months[val2]+" "+form.day.value +", "+form.year.value
 form.result2.value = days[val0]
}
// end script -->
 else {
  alert("Please try again with the correct data.");
}
>>>>>>> 3fb74d9b98ffe27a4ee6071b9bd291b4fe0c3e8f
