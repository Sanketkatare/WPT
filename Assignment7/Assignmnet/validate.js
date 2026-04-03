function validateData(){
    let userName, Password;
    let u = document.forms["form1"]["user"].value;// gets the elements value 
    //checks the user name is correct or note 
    if (u.trim() == "" || u.length <2 || u.length>12 || !isNaN(u))
    {
        alert("user name must be more than 8letter and less than 12 letters");
        document.forms["form1"]["user"].focus();
        userName=false;
    }
    else{
        userName = true;
    }
    let pass = document.forms["form1"]["Password"].value;
    // checks the password
    if(pass != "sanket123" || pass.length<8 || !isNaN(pass))
    {
        alert("passwrod is wrong");
        document.forms["form1"]["Password"].focus();
        Password=false;
    }else{
        Password=true;
    }
    return userName && Password;
}
