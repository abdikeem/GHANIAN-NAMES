function UserInfo()
{
    var CC=parseInt(prompt("Enter the first two digit of the century you were born in"));
    var CC=parseInt(prompt("Enter the last two digit of the year you were born in"));
    var CC=parseInt(prompt("Enter the two digit of the month you were born in"));
    var CC=parseInt(prompt("Enter the two digit of the day you were born in"));


    alert("Your Birthday is " +" "+dd +" "+ mm +" "+ cc + yy);

    var day = parseInt( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7;

    //CC/4)-2*CC -1)+(YY*5/4)+(MM+1)*26/10
    
    alert("The day of the week you were born is;" +  day);

    var gender=prompt("Enter the number that represents your gender. 1= Female 2= Male ")

    if (gender===1)
    {
        alert("You are Female");
    }
        if (day===0)
        {
            alert("Your Akana name is Akosua");
    }
    else if (day===1)
     {
        alert("Your Akana name is Adwoa");
     }
    else if (day===2)
     {
         alert("Your Akana name is Abenaa");
   }
    else if (day===3)
  {
    alert("Your Akana name is Akua");
  }
    else if (day===4)
  {
    alert("Your Akana name is Yaa");
  }
    else if (day===5)
   {
    alert("Your Akana name is Afua");
   }
   else 
  {
    alert("your Akana name is Ama");
   }
}

else 
{
   alert("You are Male");
}
}
if (day===0)
{
    alert("Your Akana name is Kwasi");
}
else if (day===1)
{
alert("Your Akana name is Kwadwo");
}
else if (day===2)
{
 alert("Your Akana name is Kwabena");
}
else if (day===3)
{
alert("Your Akana name is Kwaku");
}
else if (day===4)
{
alert("Your Akana name is Yaw");
}
else if (day===5)
{
alert("Your Akana name is Kofi");
}
else 
{
alert("your Akana name is Kwame");
}
}
